import React from "react";
import { useDrag } from "react-dnd";
import { dragCollectionProps } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function UseDragEff(item) {
  const dispatch = useDispatch();
  const [collectedDragProps, drag] = useDrag({
    item: item,
    // end: (item, monitor) => addFlow(monitor.getDropResult()),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  dispatch(dragCollectionProps(collectedDragProps));
  return { collectedDragProps, drag };
}
