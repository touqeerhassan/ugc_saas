// import { subDays, subHours, subMinutes } from "date-fns";
const { subDays, subHours, subMinutes } = require("date-fns");
const mongoose = require("mongoose");
// eslint-disable-next-line consistent-return
const deepCopy = (obj) => {
  return obj;
  //   if (typeof obj !== "object" || obj === null) {
  //     return obj;
  //   }
  //   if (obj instanceof Date) {
  //     return new Date(obj.getTime());
  //   }
  //   if (obj instanceof Array) {
  //     return obj.reduce((arr, item, i) => {
  //       arr[i] = deepCopy(item);
  //       return arr;
  //     }, []);
  //   }
  //   if (obj instanceof Object) {
  //     return Object.keys(obj).reduce((newObj, key) => {
  //       newObj[key] = deepCopy(obj[key]);
  //       return newObj;
  //     }, {});
  //   }
};

const User = require("../models/User");
const Thread = require("../models/Thread");
const Message = require("../models/Message");

const now = new Date();

const findThreadById = async (threadId) => {
  const threads = await Thread.find({}).populate("messages");
  console.log(threads);
  const thread = threads.find((_threadId) => _threadId._id == threadId);
  return thread || null;
};

const findThreadByParticipantIds = async (participantIds) => {
  const threads = await Thread.find({}).populate("messages");
  console.log(threads);
  const thread = threads.find((_thread) => {
    if (_thread.participantIds.length !== participantIds.length) {
      return false;
    }

    const foundParticipantIds = new Set();

    _thread.participantIds.forEach((participantId) => {
      if (participantIds.includes(participantId)) {
        foundParticipantIds.add(participantId);
      }
    });

    return foundParticipantIds.size === participantIds.length;
  });

  return thread || null;
};

const getContacts = async (req, res) => {
  const query = req.params.query;
  try {
    const contacts = await User.find({});
    console.log(contacts);
    let foundContacts = contacts;
    if (query) {
      const cleanQuery = query.toLowerCase().trim();
      foundContacts = foundContacts.filter((contact) =>
        contact?.name?.toLowerCase().includes(cleanQuery)
      );
    }
    console.log(foundContacts);
    res.status(200).json(foundContacts);
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const getThreads = async (req, res) => {
  // On server get current identity (user) from the request
  // const user = {
  //     id: "5e86809283e28b96d2d38537",
  //     avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
  //     name: "Anika Visser",
  // };

  const { id } = req.params;
  console.log(id);

  try {
    const user = await User.findById(id);
    const threads = await Thread.find({}).populate("messages");
    const expandedThreads = threads.map(async (thread) => {
      const participants = [user];

      const contacts = await User.find({});

      contacts.forEach((contact) => {
        if (thread.participantIds.includes(contact._id)) {
          participants.push({
            _id: contact._id,
            avatar: contact.avatar,
            lastActivity: contact.lastActivity,
            name: contact.name,
          });
        }
      });

      return {
        ...thread,
        participants,
      };
    });
    res.status(200).json(deepCopy(expandedThreads));
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const getThread = async (req, res) => {
  const threadKey = req.params.threadKey;
  const id = req.params.id;
  console.log(req.params);
  try {
    // On server get current identity (user) from the request
    const user = await User.findById(id);
    // const user = {
    //   id: "5e86809283e28b96d2d38537",
    //   avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    //   name: "Anika Visser",
    // };

    let thread;

    // Thread key might be a contact ID
    const contacts = await User.find({});
    const contact = contacts.find((contact) => contact._id === threadKey);

    if (contact) {
      thread = await findThreadByParticipantIds([user._id, contact._id]);
    }

    // Thread key might be a thread ID
    if (!thread) {
      thread = await findThreadById(threadKey);
    }

    // If reached this point and thread does not exist this could mean:
    // b) The thread key is a contact ID, but no thread found
    // a) The thread key is a thread ID and is invalid
    if (!thread) {
      return res.status(404).json("Thread not found");
    }

    const participants = [user];

    contacts.forEach((contact) => {
      if (thread.participantIds.includes(contact._id)) {
        participants.push({
          _id: contact._id,
          avatar: contact.avatar,
          lastActivity: contact.lastActivity,
          name: contact.name,
        });
      }
    });

    const expandedThread = {
      ...thread,
      participants,
    };

    res.status(200).json(deepCopy(expandedThread));
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const markThreadAsSeen = async (req, res) => {
  const threadId = req.params.threadId;
  try {
    const threads = await Thread.find({}).populate("messages");
    const thread = threads.find((_thread) => _thread_.id === threadId);

    if (thread) {
      thread.unreadCount = 0;
      await thread.save();
    }

    res.status(200).json("Success");
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const getParticipants = async (req, res) => {
  const threadKey = req.params.threadKey;
  const id = req.params.id;
  try {
    // On server get current identity (user) from the request
    const user = await User.findById(id);
    // const user = {
    //   id: "5e86809283e28b96d2d38537",
    //   avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    //   name: "Anika Visser",
    // };

    const contacts = await User.find({});

    let participants = [user];

    // Thread key might be a thread ID
    let thread = await findThreadById(threadKey);
    console.log("Thread");
    console.log(thread);

    if (thread) {
      contacts.forEach((contact) => {
        if (thread.participantIds.includes(contact._id)) {
          participants.push({
            _id: contact._id,
            avatar: contact.avatar,
            lastActivity: contact.lastActivity,
            name: contact.name,
          });
        }
      });
    } else {
      const contact = contacts.find((contact) => contact._id === threadKey);

      // If no contact found, the user is trying a shady route
      if (!contact) {
        return res.status(404).json("Thread not found");
      }

      participants.push({
        _id: contact._id,
        avatar: contact.avatar,
        lastActivity: contact.lastActivity,
        name: contact.name,
      });
    }

    return res.status(200).json(participants);
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const addMessage = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  console.log("Id", id);
  console.log(req.body);
  const { threadId, recipientIds, body } = req.body;
  try {
    if (!(threadId || recipientIds)) {
      return res.status(400).send("Missing threadId or recipientIds");
    }

    // On server get current identity (user) from the request
    // const user = {
    //   id: "5e86809283e28b96d2d38537",
    // };
    const user = await User.findOne({ _id: id });
    console.log(user);

    let thread;

    // Try to find the thread
    if (threadId) {
      thread = await findThreadById(threadId);

      // If thread ID provided the thread has to exist.
      if (!thread) {
        return res.status(404).send("Thread not found");
      }
    } else {
      const participantIds = [user._id, ...recipientIds];
      thread = await findThreadByParticipantIds(participantIds);
    }

    // If reached this point, thread will exist if thread ID provided
    // For recipient Ids it may or may not exist. If it doesn't, create a new one.

    if (!thread) {
      const participantIds = [user._id, ...recipientIds];
      const newThread = new Thread({
        messages: [],
        participantIds,
        type: participantIds.length === 2 ? "ONE_TO_ONE" : "GROUP",
        unreadCount: 0,
      });

      thread = await newThread.save();
      console.log(thread);
    }

    const newMessage = new Message({
      attachments: [],
      body,
      contentType: "text",
      createdAt: new Date().getTime(),
      authorId: user._id,
    });

    let message = await newMessage.save();
    console.log("Message", String(message._id));

    thread.messages.push(message._id);

    await thread.save();

    res.status(200).json({
      threadId: thread._id,
      message,
    });
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

module.exports = {
  getContacts,
  getThreads,
  getThread,
  markThreadAsSeen,
  getParticipants,
  addMessage,
};
