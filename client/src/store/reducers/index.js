import { combineReducers } from "redux";
import campaignReducer from "./campaign";
import creatorReducer from "./creator";

const rootReducer = combineReducers({
  campaign: campaignReducer,
  creator: creatorReducer,
});

export default rootReducer;
