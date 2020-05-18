import React from "react";
import { useDrag } from "react-dnd";
import { dragCollectionProps } from "../../store/actions";
import store from "../../store";

export default function UseDragEff(item) {
  const [collectedDragProps, drag] = useDrag({
    item: item,
    // end: (item, monitor) => addFlow(monitor.getDropResult()),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  store.dispatch(dragCollectionProps(collectedDragProps));
  return { collectedDragProps, drag };
}
