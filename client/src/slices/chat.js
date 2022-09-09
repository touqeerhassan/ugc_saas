import { createSlice } from "@reduxjs/toolkit";
import { chatApi } from "../__fake-api__/chat-api";
import { objFromArray } from "../utils/obj-from-array";

const initialState = {
  activeThreadId: null,
  contacts: {
    byId: {},
    allIds: [],
  },
  threads: {
    byId: {},
    allIds: [],
  },
};

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getContacts(state, action) {
      const contacts = action.payload;

      state.contacts.byId = objFromArray(contacts);
      state.contacts.allIds = Object.keys(state.contacts.byId);
    },
    getThreads(state, action) {
      const threads = action.payload;
      // console.log(threads);
      // console.log("Getting Threads", objFromArray(threads));
      state.threads.byId = objFromArray(threads);
      // console.log(state.threads.byId);

      state.threads.allIds = Object.keys(state.threads.byId);
      // console.log(state.threads.allIds);
    },
    getThread(state, action) {
      const thread = action.payload;

      if (thread) {
        state.threads.byId[thread._id] = thread;

        if (!state.threads.allIds.includes(thread._id)) {
          state.threads.allIds.unshift(thread._id);
        }
      }
    },
    markThreadAsSeen(state, action) {
      const threadId = action.payload;
      const thread = state.threads.byId[threadId];

      if (thread) {
        thread.unreadCount = 0;
      }
    },
    setActiveThread(state, action) {
      state.activeThreadId = action.payload;
    },
    addMessage(state, action) {
      const { threadId, message } = action.payload;
      const thread = state.threads.byId[threadId];

      if (thread) {
        thread.messages.push(message);
      }
    },
    messageReceived(state, action) {
      const { threadId, message } = action.payload;
      const thread = state.threads.byId[threadId];

      if (thread) {
        thread.messages.push(message);
      }
    },
  },
});

export const { reducer } = slice;

export const getContacts = () => async (dispatch) => {
  const data = await chatApi.getContacts();

  dispatch(slice.actions.getContacts(data));
};

export const getThreads = (userInfo) => async (dispatch) => {
  // console.log(userInfo);
  const data = await chatApi.getThreads(userInfo);
  // console.log("data", data);
  dispatch(slice.actions.getThreads(data));
};

export const getThread = (id, threadKey) => async (dispatch) => {
  const data = await chatApi.getThread(id, threadKey);

  dispatch(slice.actions.getThread(data));

  return data?._id;
};

export const markThreadAsSeen = (threadId) => async (dispatch) => {
  await chatApi.markThreadAsSeen(threadId);

  dispatch(slice.actions.markThreadAsSeen(threadId));
};

export const setActiveThread = (threadId) => (dispatch) => {
  dispatch(slice.actions.setActiveThread(threadId));
};

export const addMessage =
  ({ id, threadId, recipientIds, body }) =>
  async (dispatch) => {
    const data = await chatApi.addMessage({
      id,
      threadId,
      recipientIds,
      body,
    });

    dispatch(slice.actions.addMessage(data));

    return { threadId: data.threadId, message: data.message };
  };

export const messageReceived =
  ({ threadId, message }) =>
  (dispatch) => {
    dispatch(slice.actions.messageReceived({ threadId, message }));
  };
