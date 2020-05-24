import React from "react";
import { useDrag } from "react-dnd";
import { dragCollectionProps, dragEndProps } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function UseDragEff(item, dragId) {
  const dispatch = useDispatch();
  const drag_id = dragId;
  const [collectedDragProps, drag] = useDrag({
    item: item,
    isDragging: (monitor) => dispatch(dragEndProps(drag_id)),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  dispatch(dragCollectionProps(collectedDragProps));
  return { collectedDragProps, drag };
}
