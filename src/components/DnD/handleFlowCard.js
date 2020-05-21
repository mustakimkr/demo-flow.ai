import React, { useState } from "react";
import DropHere from "../dropHere.js";
import FlowCard from "../flowCard.js";
import ConditionsFlow from "../conditionsFlow";

function HandleFlowCard(isDragging) {
  const handleDrop = (item, monitor) => {};
  const [flowCard, setFlowCard] = useState();
  return { flowCard, setFlowCard, handleDrop };
}

export default HandleFlowCard;
