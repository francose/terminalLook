import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function counter(state = initialState.messages, action) {
  switch (action.type) {
    case Types.ADD_MESSAGE:
      return { ...state, timestamp: action.timestamp, payload: action.payload };
    case Types.MESSAGES:
      return action.messages;
    default:
      return state;
  }
}
