import * as types from "./actionTypes";

export const add_message = (timestamp, value) => {
  return {
    type: types.ADD_MESSAGE,
    timestamp: timestamp,
    payload: value,
  };
};

export const messages = () => {
  return { type: types.MESSAGES };
};
