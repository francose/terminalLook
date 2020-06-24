import { combineReducers } from "redux";
//Feature reducers  headerr are here .....
import subcribers from "./subscriberReducers";

const rootReducer = combineReducers({
  //Feature reducers here below
  subcribers,
});

export default rootReducer;
