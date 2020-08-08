import * as types from "./actionTypes";

export const setRedirect = (val) => {
  
  return {
    type: types.START,
    payload: val,
  };
};