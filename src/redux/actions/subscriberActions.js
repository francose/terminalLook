import * as types from "./actionTypes";

export function createSubcriber(subscriber) {
  //   debugger;
  return { type: types.CREATE_SUBSCRIBER, subscriber };
}
