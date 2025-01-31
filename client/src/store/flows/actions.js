import {
  ADD_FLOWS_STEP,
  ADD_FLOW,
  FLOW_ADD_STATUS,
  CHANGE_ASIDE_BAR,
} from "./actionTypes";

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
export const changeAsideBar = (payload) => {
  return {
    type: CHANGE_ASIDE_BAR,
    payload,
  };
};
