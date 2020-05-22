import { DRAG_COLLOCTION_PROPS, DRAG_END_PROPS } from "./actionTypes";

export const dragCollectionProps = (dragColProps) => {
  return {
    type: DRAG_COLLOCTION_PROPS,
    payload: dragColProps,
  };
};
export const dragEndProps = (dragEnd) => {
  return {
    type: DRAG_END_PROPS,
    payload: dragEnd,
  };
};
