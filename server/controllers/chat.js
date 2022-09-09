// import { subDays, subHours, subMinutes } from "date-fns";
const { subDays, subHours, subMinutes } = require("date-fns");
const mongoose = require("mongoose");
// eslint-disable-next-line consistent-return
const deepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.reduce((arr, item, i) => {
      arr[i] = deepCopy(item);
      return arr;
    }, []);
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((newObj, key) => {
      newObj[key] = deepCopy(obj[key]);
      return newObj;
    }, {});
  }
};

const User = require("../models/User");
const Thread = require("../models/Thread");
const Message = require("../models/Message");

const now = new Date();

const findThreadById = async (threadId) => {
  const threads = await Thread.find({}).populate("messages");
  // console.log(threads);
  const thread = threads.find((_thread) => _thread._id == threadId);
  // console.log(threadId);
  return thread || null;
};

const findThreadByParticipantIds = async (participantIds) => {
  const threads = await Thread.find({}).populate("messages");
  // console.log(threads);
  // console.log(participantIds);
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
  // console.log(thread);
  return thread || null;
};

const getContacts = async (req, res) => {
  const query = req.params.query;
  try {
    const contacts = await User.find({});
    // console.log(contacts);
    let foundContacts = contacts;
    if (query) {
      const cleanQuery = query.toLowerCase().trim();
      foundContacts = foundContacts.filter((contact) =>
        contact?.name?.toLowerCase().includes(cleanQuery)
      );
    }
    // console.log(foundContacts);
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
  // console.log(id);

  try {
    const user = await User.findById(id);
    const threads = await Thread.find({ participantIds: user._id }).populate(
      "messages"
    );
    const contacts = await User.find({});

    const expandedThreads = threads.map((thread) => {
      const participants = [];

      contacts.forEach((contact) => {
        if (thread.participantIds.includes(contact._id)) {
          participants.push(contact);
        }
      });

      // console.log(thread);

      return {
        ...thread.toObject(),
        participants,
      };
    });
    // console.log("ExpandedThreads", expandedThreads);
    res.status(200).json(expandedThreads);
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const getThread = async (req, res) => {
  const threadKey = req.params.threadKey;
  const id = req.params.id;
  // console.log(req.params);
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
    const contact = contacts.find((contact) => contact._id == threadKey);
    // console.log("Contact", contact);

    if (contact) {
      thread = await findThreadByParticipantIds([
        String(user._id),
        String(contact._id),
      ]);
      // console.log("Thread", thread);
    }

    // Thread key might be a thread ID
    if (!thread) {
      thread = await findThreadById(threadKey);
      // console.log("Thread", thread);
    }

    // If reached this point and thread does not exist this could mean:
    // b) The thread key is a contact ID, but no thread found
    // a) The thread key is a thread ID and is invalid
    if (!thread) {
      return res.status(404).json("Thread not found");
    }

    // console.log("thread Found", thread);

    const participants = [];

    contacts.forEach((contact) => {
      if (thread.participantIds.includes(contact._id)) {
        participants.push(contact);
      }
    });

    // console.log(thread, participants);

    const expandedThread = {
      ...thread.toObject(),
      participants,
    };

    // console.log("ExpandedThread", expandedThread);
    // console.log(expandedThread);

    res.status(200).json(expandedThread);
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const markThreadAsSeen = async (req, res) => {
  const threadId = req.params.threadId;
  try {
    const threads = await Thread.find({}).populate("messages");
    const thread = threads.find((_thread) => _thread._id == threadId);

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
  console.log("Here");
  try {
    // On server get current identity (user) from the request
    const user = await User.findById(id);
    // const user = {
    //   id: "5e86809283e28b96d2d38537",
    //   avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    //   name: "Anika Visser",
    // };

    const contacts = await User.find({});

    let participants = [];

    // Thread key might be a thread ID
    let thread = await findThreadById(threadKey);
    // console.log("Thread Found Yay!");
    // console.log(thread);

    if (thread) {
      contacts.forEach((contact) => {
        if (thread.participantIds.includes(contact._id)) {
          participants.push(contact);
        }
      });
    } else {
      // console.log(contacts);
      const contact = contacts.find((contact) => contact._id == threadKey);
      // console.log(threadKey);
      // console.log(contact);

      if (!contact) {
        return res.status(404).json("Contact not found");
      }

      thread = await findThreadByParticipantIds([
        String(user._id),
        String(contact._id),
      ]);

      if (!thread) {
        const newThread = new Thread({
          messages: [],
          participantIds: [id, threadKey],
          type: "ONE_TO_ONE",
          unreadCount: 0,
        });
        await newThread.save();
      }

      participants.push(contact);
    }

    return res.status(200).json(participants);
  } catch (err) {
    console.error("[Chat Api]: ", err);
    res.status(500).json("Server Error");
  }
};

const addMessage = async (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);

  // console.log("Id", id);
  // console.log(req.body);
  let { threadId, recipientIds, body } = req.body;
  try {
    if (!(threadId || recipientIds)) {
      return res.status(400).send("Missing threadId or recipientIds");
    }

    // On server get current identity (user) from the request
    // const user = {
    //   id: "5e86809283e28b96d2d38537",
    // };

    const user = await User.findOne({ _id: id });
    // console.log(user);

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
    // console.log("Thread", thread);
    // console.log(recipientIds);

    if (!thread) {
      const participantIds = [user._id, ...recipientIds];
      const newThread = new Thread({
        messages: [],
        participantIds,
        type: participantIds.length === 2 ? "ONE_TO_ONE" : "GROUP",
        unreadCount: 0,
      });

      thread = await newThread.save();
      // console.log("New Thread", thread);
    }

    const newMessage = new Message({
      attachments: [],
      body,
      contentType: "text",
      createdAt: new Date().getTime(),
      authorId: user._id,
    });

    let message = await newMessage.save();
    // console.log("Message", String(message._id));

    thread.messages.push(message._id);

    await thread.save();

    // console.log("Thread to be sent", thread);
    // console.log(message);

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
