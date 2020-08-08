import * as Types from "../actions/actionTypes";
import initialState from "./initialState";


export default function setRedirect(state = initialState.redirect, action) {
    switch (action.type) {
      case Types.START:
        
        state = action.payload 
        return state;
      default:
        return state;
    }
  }