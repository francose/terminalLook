import * as types from "./actionTypes";

export const add_message = (obj) => {
  return {
    type: types.ADD_MESSAGE,
    payload: obj,
  };
};
