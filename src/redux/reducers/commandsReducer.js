import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function counter(state = initialState.commands, action) {
  switch (action.type) {
    case Types.COMMANDS_LIST:
      return state;
    default:
      return state;
  }
}
