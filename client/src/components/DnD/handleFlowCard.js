import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addFlowsStep } from "../../store/actions";
import { findStep } from "../doFunctions";

function HandleFlowCard(steps, dragId) {
  const dispatch = useDispatch();

  //console.log(dragId);

  const moveItem = (steps, dragItem, dropItem) => {
    steps.forEach((element) => {
      if (element.step_id === dragItem.step_id) {
        element.step_id = dropItem.step_id;
        element.type = dropItem.type;
        element.title = dropItem.title;
        element.item_id = dropItem.item_id;
      } else if (element.step_id === dropItem.step_id) {
        element.step_id = dragItem.step_id;
        element.type = dragItem.type;
        element.title = dragItem.title;
        element.item_id = dragItem.item_id;
      }
      return moveItem(element.children, dragItem, dropItem);
    });
  };
  const handleDrop = (item, monitor, dropId) => {
    const dragItem = findStep(steps, dragId);
    const dropItem = findStep(steps, dropId);

    const newSteps = JSON.parse(JSON.stringify(steps)); //deep copy

    moveItem(newSteps, dragItem, dropItem);

    dispatch(addFlowsStep(newSteps));
  };

  return { handleDrop };
}

export default HandleFlowCard;
