import { ADD_FLOWS_STEP, ADD_FLOW, FLOW_ADD_STATUS } from "./actionTypes";

export const addFlowsStep = (flowSteps) => {
  return {
    type: ADD_FLOWS_STEP,
    payload: flowSteps,
  };
};
export const addFlow = (flow) => {
  return {
    type: ADD_FLOW,
    payload: flow,
  };
};
export const flowStatus = (payload) => {
  return {
    type: FLOW_ADD_STATUS,
    payload,
  };
};
