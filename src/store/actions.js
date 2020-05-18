import { DRAG_COLLOCTION_PROPS } from "./actionTypes";

export const dragCollectionProps = (dragColProps) => {
  return {
    type: DRAG_COLLOCTION_PROPS,
    payload: dragColProps,
  };
};
