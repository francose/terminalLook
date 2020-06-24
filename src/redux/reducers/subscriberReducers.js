import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function authorsReducer(
  state = initialState.subscriber,
  action
) {
  switch (action.type) {
    case types.CREATE_SUBSCRIBER:
      //   debugger;
      return action.subscriber;
    default:
      return state;
  }
}
