import React from "react";
import { useDrag } from "react-dnd";

export default function UseDragEff(item) {
  const [collectedProps, drag] = useDrag({
    item: item,
    // end: (item, monitor) => addFlow(monitor.getDropResult()),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return { collectedProps, drag };
}
