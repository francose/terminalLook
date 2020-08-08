import { combineReducers } from "redux";
//Feature reducers  headerr are here .....
import messages from "./messagesReducers";
import redirect from "./redirectStart";

const rootReducer = combineReducers({
  //Feature reducers here below
  messages,
  redirect
});

export default rootReducer;
