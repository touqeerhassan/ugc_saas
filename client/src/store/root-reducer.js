import { combineReducers } from "@reduxjs/toolkit";
import { reducer as calendarReducer } from "../slices/calendar";
import { reducer as chatReducer } from "../slices/chat";
import { reducer as kanbanReducer } from "../slices/kanban";
import { reducer as mailReducer } from "../slices/mail";
import campaignReducer from "./reducers/campaign";
import creatorReducer from "./reducers/creator";

export const rootReducer = combineReducers({
  campaign: campaignReducer,
  creator: creatorReducer,
  calendar: calendarReducer,
  chat: chatReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
});
