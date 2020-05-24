import { DRAG_COLLOCTION_PROPS, DRAG_END_PROPS } from "./actionTypes";

const initialState = {
  dragColProps: {},
};

const dndProps = (state = initialState, action) => {
  switch (action.type) {
    case DRAG_COLLOCTION_PROPS:
      state = {
        ...state,
        dragColProps: action.payload,
      };
      break;
    case DRAG_END_PROPS:
      state = {
        ...state,
        drag_id: action.payload,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default dndProps;
