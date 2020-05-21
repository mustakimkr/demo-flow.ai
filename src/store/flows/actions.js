import { ADD_FLOWS_STEP } from "./actionTypes";

export const addFlowsStep = (flowSteps) => {
  return {
    type: ADD_FLOWS_STEP,
    payload: flowSteps,
  };
};
