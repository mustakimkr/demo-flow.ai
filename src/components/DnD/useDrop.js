import React from "react";
import { useDrop } from "react-dnd";

export default function UseDropEff(accept, handleDrop) {
  const [collectedDropProps, drop] = useDrop({
    accept,
    drop: (item, monitor) => handleDrop(item, monitor),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      isDrop: monitor.didDrop(),
    }),
  });
  return { collectedDropProps, drop };
}
