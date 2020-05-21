import { ADD_FLOWS_STEP } from "./actionTypes";

const initialState = {
  steps: [],
};

const flow = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLOWS_STEP:
      state = {
        ...state,
        steps: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};
export default flow;
