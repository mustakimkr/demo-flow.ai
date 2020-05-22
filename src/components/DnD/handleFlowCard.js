import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addFlowsStep } from "../../store/actions";

function HandleFlowCard(isDragging) {
  const dispatch = useDispatch();
  const dragId = useSelector((state) => state.dndProps.drag_id, shallowEqual);
  const steps = useSelector((state) => state.flow.steps, shallowEqual);

  let foundItem = null;
  const find = (steps, stepId) => {
    steps.forEach((element) => {
      if (element.step_id === stepId) {
        return (foundItem = element);
      } else {
        return find(element.children, stepId);
      }
    });
    return foundItem;
  };
  const moveItem = (steps, dragItem, dropItem) => {
    const newSteps = steps;
    newSteps.forEach((element) => {
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
    console.log(steps);
    const dragItem = find(steps, dragId);
    const dropItem = find(steps, dropId);

    moveItem(steps, dragItem, dropItem);
    console.log(steps);
    dispatch(addFlowsStep(steps));
  };

  return { handleDrop };
}

export default HandleFlowCard;
