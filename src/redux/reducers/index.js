import { combineReducers } from "redux";
//Feature reducers  headerr are here .....
import messages from "./messagesReducers";

const rootReducer = combineReducers({
  //Feature reducers here below
  messages,
});

export default rootReducer;
