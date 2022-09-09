import { subDays, subHours, subMinutes } from "date-fns";
import { createResourceId } from "../utils/create-resource-id";
import { deepCopy } from "../utils/deep-copy";

import { API_SERVICE } from "../config";
import firebase from "../lib/firebase";

const now = new Date();

const contacts = [
  // {
  //   id: "5e8891ab188cd2855e6029b7",
  //   avatar: "/static/mock-images/avatars/avatar-alcides_antonio.png",
  //   isActive: true,
  //   lastActivity: now.getTime(),
  //   name: "Alcides Antonio",
  // },
  // {
  //   id: "5e887a62195cc5aef7e8ca5d",
  //   avatar: "/static/mock-images/avatars/avatar-marcus_finn.png",
  //   isActive: false,
  //   lastActivity: subHours(now, 2).getTime(),
  //   name: "Marcus Finn",
  // },
  // {
  //   id: "5e887ac47eed253091be10cb",
  //   avatar: "/static/mock-images/avatars/avatar-carson_darrin.png",
  //   isActive: false,
  //   lastActivity: subMinutes(now, 15).getTime(),
  //   name: "Carson Darrin",
  // },
  // {
  //   id: "5e887b209c28ac3dd97f6db5",
  //   avatar: "/static/mock-images/avatars/avatar-fran_perez.png",
  //   isActive: true,
  //   lastActivity: now.getTime(),
  //   name: "Fran Perez",
  // },
  // {
  //   id: "5e887b7602bdbc4dbb234b27",
  //   avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
  //   isActive: true,
  //   lastActivity: now.getTime(),
  //   name: "Jie Yan Song",
  // },
  // {
  //   id: "5e86805e2bafd54f66cc95c3",
  //   avatar: "/static/mock-images/avatars/avatar-miron_vitold.png",
  //   isActive: false,
  //   lastActivity: subHours(now, 1).getTime(),
  //   name: "Miron Vitold",
  // },
  // {
  //   id: "5e887a1fbefd7938eea9c981",
  //   avatar: "/static/mock-images/avatars/avatar-penjani_inyene.png",
  //   isActive: false,
  //   lastActivity: subHours(now, 6).getTime(),
  //   name: "Penjani Inyene",
  // },
  // {
  //   id: "5e887d0b3d090c1b8f162003",
  //   avatar: "/static/mock-images/avatars/avatar-omar_darboe.png",
  //   isActive: true,
  //   lastActivity: now.getTime(),
  //   name: "Omar Darobe",
  // },
  // {
  //   id: "5e88792be2d4cfb4bf0971d9",
  //   avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
  //   isActive: true,
  //   lastActivity: now.getTime(),
  //   name: "Siegbert Gottfried",
  // },
  // {
  //   id: "5e8877da9a65442b11551975",
  //   avatar: "/static/mock-images/avatars/avatar-iulia_albu.png",
  //   isActive: true,
  //   lastActivity: now.getTime(),
  //   name: "Iulia Albu",
  // },
  // {
  //   id: "5e8680e60cba5019c5ca6fda",
  //   avatar: "/static/mock-images/avatars/avatar-nasimiyu_danai.png",
  //   isActive: true,
  //   lastActivity: now.getTime(),
  //   name: "Nasimiyu Danai",
  // },
];

let threads = [
  // {
  //   id: "5e867eb9de721aecaccf4f7b",
  //   messages: [
  //     {
  //       id: "5e867f0a5bc0ff2bfa07bfa6",
  //       attachments: [],
  //       body: "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
  //       contentType: "text",
  //       createdAt: subDays(subHours(now, 10), 4).getTime(),
  //       authorId: "5e86805e2bafd54f66cc95c3",
  //     },
  //     {
  //       id: "5e867f167d5f78109ae9f2a4",
  //       attachments: [],
  //       body: "I would need to know more details, but my hourly rate stats at $35/hour. Thanks!",
  //       contentType: "text",
  //       createdAt: subDays(subHours(now, 2), 4).getTime(),
  //       authorId: "5e86809283e28b96d2d38537",
  //     },
  //     {
  //       id: "5e867f1c9ca72084693528f4",
  //       attachments: [],
  //       body: "Well it's a really easy one, I'm sure we can make it half of the price.",
  //       contentType: "text",
  //       createdAt: subHours(now, 5).getTime(),
  //       authorId: "5e86805e2bafd54f66cc95c3",
  //     },
  //     {
  //       id: "5e867f22fd2e27a09849b4db",
  //       attachments: [],
  //       body: "Then why don't you make it if it's that easy? Sorry I'm not interetes, have fantastic day Adam!",
  //       contentType: "text",
  //       createdAt: subHours(now, 3).getTime(),
  //       authorId: "5e86809283e28b96d2d38537",
  //     },
  //     {
  //       id: "5e867f28a34d45ac6eb5c41f",
  //       attachments: [],
  //       body: "Last offer, $25 per hour",
  //       contentType: "text",
  //       createdAt: subHours(now, 2).getTime(),
  //       authorId: "5e86805e2bafd54f66cc95c3",
  //     },
  //     {
  //       id: "5e867f2dba984a3f78b33526",
  //       attachments: [],
  //       body: "/static/mock-images/chat/media_1.png",
  //       contentType: "image",
  //       createdAt: subHours(now, 1).getTime(),
  //       authorId: "5e86805e2bafd54f66cc95c3",
  //     },
  //   ],
  //   participantIds: ["5e86809283e28b96d2d38537", "5e86805e2bafd54f66cc95c3"],
  //   type: "ONE_TO_ONE",
  //   unreadCount: 2,
  // },
  // {
  //   id: "5e867fa7082c3c5921403a26",
  //   messages: [
  //     {
  //       id: "5e867fc180837d901bd9bca1",
  //       attachments: [],
  //       body: "Hey, would you like to collaborate?",
  //       contentType: "text",
  //       createdAt: subDays(subMinutes(now, 6), 3).getTime(),
  //       authorId: "5e8680e60cba5019c5ca6fda",
  //     },
  //     {
  //       id: "5e8d6fb695df7971237fc173",
  //       attachments: [],
  //       body: "Hi, Merrile!",
  //       contentType: "text",
  //       createdAt: subDays(subMinutes(now, 5), 3).getTime(),
  //       authorId: "5e86809283e28b96d2d38537",
  //     },
  //     {
  //       id: "58825a290eb4d4271a54f188",
  //       attachments: [],
  //       body: "Hello everyone 😀",
  //       contentType: "text",
  //       createdAt: subDays(subMinutes(now, 2), 1).getTime(),
  //       authorId: "5e8891ab188cd2855e6029b7",
  //     },
  //   ],
  //   participantIds: [
  //     "5e86809283e28b96d2d38537",
  //     "5e8680e60cba5019c5ca6fda",
  //     "5e8891ab188cd2855e6029b7",
  //   ],
  //   type: "GROUP",
  //   unreadCount: 0,
  // },
];

const findThreadById = (threadId) => {
  const thread = threads.find((_threadId) => _threadId.id === threadId);
  return thread || null;
};

const findThreadByParticipantIds = (participantIds) => {
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

class ChatApi {
  getContacts(query) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${API_SERVICE}/getContacts/${query}`);
        const foundContacts = await response.json();

        // console.log(foundContacts);

        if (response.status === 200) {
          resolve(deepCopy(foundContacts));
        }
      } catch (err) {
        console.error("[Chat Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  getThreads(user) {
    // On server get current identity (user) from the request
    // const user = {
    //   id: "5e86809283e28b96d2d38537",
    //   avatar: "/static/mock-images/avatars/avatar-anika_visser.png",
    //   name: "Anika Visser",
    // };
    // console.log(user);

    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${API_SERVICE}/getThreads/${user?._id}`);
        const foundThreads = await response.json();

        // console.log(foundThreads);

        if (response.status === 200) {
          resolve(deepCopy(foundThreads));
        }
      } catch (err) {
        console.error("[Chat Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  getThread(id, threadKey) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `${API_SERVICE}/getThread/${id}/${threadKey}`
        );
        const foundThread = await response.json();

        // console.log(foundThread);

        if (response.status === 200) {
          resolve(deepCopy(foundThread));
        }
      } catch (err) {
        console.error("[Chat Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  markThreadAsSeen(threadId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `${API_SERVICE}/markThreadAsSeen/${threadId}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const markedThread = await response.json();

        // console.log(markedThread);

        if (response.status === 200) {
          resolve(true);
        }
      } catch (err) {
        console.error("[Chat Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  getParticipants(id, threadKey) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          `${API_SERVICE}/getParticipants/${id}/${threadKey}`
        );
        const participants = await response.json();
        // console.log(participants);
        // console.log(markedThread);

        if (response.status === 200) {
          resolve(participants);
        }
      } catch (err) {
        console.error("[Chat Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  addMessage({ id, threadId, recipientIds, body }) {
    // console.log(id, threadId, recipientIds, body);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${API_SERVICE}/addMessage/${id}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            threadId,
            recipientIds,
            body,
          }),
        });
        const addedMessage = await response.json();

        // console.log(addedMessage);

        if (response.status === 200) {
          resolve(addedMessage);
        }
      } catch (err) {
        console.error("[Chat Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }
}

export const chatApi = new ChatApi();
