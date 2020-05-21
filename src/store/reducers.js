import { combineReducers } from "redux";

import dndProps from "./DnD/reducers";
import flow from "./flows/reducers";

const rootReducer = combineReducers({
  dndProps,
  flow,
});

export default rootReducer;
