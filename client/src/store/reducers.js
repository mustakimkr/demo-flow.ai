import { combineReducers } from "redux";

import dndProps from "./DnD/reducers";
import { flow, flow_status } from "./flows/reducers";

const rootReducer = combineReducers({
  dndProps,
  flow,
  flow_status,
});

export default rootReducer;
