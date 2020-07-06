import * as types from "./actionTypes";
import initialState from "../reducers/initialState";

export const add_message = (obj) => {
  // console.log(obj);
  return {
    type: types.ADD_MESSAGE,
    payload: obj,
  };
};
