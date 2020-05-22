import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addFlowsStep } from "../../store/actions";

let step_id = 100;
function SetFlowsChild() {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.flow.steps, shallowEqual);
  //console.log(steps);

  const setSteps = (steps, step, step_id2, stepId, item) => {
    steps.forEach((element) => {
      if (element.children.length == 0) {
        if (
          item.type.toUpperCase() === "CONDITIONS" &&
          element.step_id == stepId
        ) {
          element.children.push(step);
          element.children.push({
            ...step,
            step_id: step_id2,
          });
        } else {
          if (element.step_id == stepId) return (element.children = [step]);
        }
      } else {
        return setSteps(element.children, step, step_id2, stepId, item);
      }
    });
  };

  const handleDrop = (item, monitor, stepId) => {
    let step = {
      step_id: step_id++,
      type: item.type.toUpperCase(),
      title: null,
      item_id: item.id,
      children: [],
    };
    //  console.log(stepId);
    let step_id2 = step_id++;

    if (steps.length == 0) {
      if (item.type.toUpperCase() === "CONDITIONS") {
        steps.push(step);
        steps.push({
          ...step,
          step_id: step_id2,
        });
      } else {
        steps.push(step);
      }
    } else {
      setSteps(steps, step, step_id2, stepId, item);
    }

    // steps.forEach((element) => {
    //   if (!element.children) {
    //     if (item.type.toUpperCase() === "CONDITIONS") {
    //       element.children = [step];
    //       element.children.push({
    //         ...step,
    //         step_id: step_id2,
    //       });
    //     } else {
    //       if (element.step_id == stepId) return (element.children = [step]);
    //     }
    //   }
    // });
    // if (item.type.toUpperCase() === "CONDITIONS") {
    //   steps.push(step);
    //   steps.push({
    //     ...step,
    //     step_id: step_id2,
    //   });
    // } else {
    //   steps.push(step);
    // }

    dispatch(addFlowsStep(steps));
  };

  return { steps, handleDrop };
}

export default SetFlowsChild;
