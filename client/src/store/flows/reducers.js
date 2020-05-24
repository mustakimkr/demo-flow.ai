import { ADD_FLOWS_STEP, ADD_FLOW, FLOW_ADD_STATUS } from "./actionTypes";

const initialState = {
  steps: [],
};

export const flow = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLOWS_STEP:
      state = {
        ...state,
        steps: action.payload,
      };
      break;
    case ADD_FLOW:
      state = {
        ...state,
        ...action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export const flow_status = (state = { status: false }, action) => {
  switch (action.type) {
    case FLOW_ADD_STATUS:
      state = {
        ...state,
        status: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
