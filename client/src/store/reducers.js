import { combineReducers } from "redux";

import dndProps from "./DnD/reducers";
import { flow, flow_status, aside_bar } from "./flows/reducers";

const rootReducer = combineReducers({
  dndProps,
  flow,
  flow_status,
  aside_bar,
});

export default rootReducer;
