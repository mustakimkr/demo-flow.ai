import { combineReducers } from "redux";

import { DRAG_COLLOCTION_PROPS } from "./actionTypes";

const initialState = {
  dragColProps: [],
};

const dragProps = (state = initialState, action) => {
  switch (action.type) {
    case DRAG_COLLOCTION_PROPS:
      state = {
        ...state,
        dragColProps: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

const rootReducer = combineReducers({ dragProps });

export default rootReducer;
