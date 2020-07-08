import { combineReducers } from "redux";
//Feature reducers  headerr are here .....
import messages from "./messagesReducers";
import commands from "./commandsReducer";

const rootReducer = combineReducers({
  //Feature reducers here below
  messages,
  commands,
});

export default rootReducer;
