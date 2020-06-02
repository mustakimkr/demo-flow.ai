import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addFlowsStep } from "../../store/actions";
//import { findStep, removeStep } from "../doFunctions";

let step_id = 100;

// const getLocation = () => {
//   return new Promise((res, rej) =>
//     navigator.geolocation.getCurrentPosition(res, rej)
//   );
// };

function SetFlowsChild(props) {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.flow.steps, shallowEqual);

  const [locationCenter, setLocationCenter] = useState({
    lat: 23.8205708,
    lng: 90.36542960000001,
  });
  // const getPosition = async (position) => {
  //   if (navigator.geolocation) {
  //     const location = await getLocation();

  //     setLocationCenter({
  //       lat: location.coords.latitude,
  //       lng: location.coords.longitude,
  //     });
  //   } else {
  //     setLocationCenter({
  //       lat: 23.8205708,
  //       lng: 90.36542960000001,
  //     });
  //   }
  // };
  // getPosition();

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
        } else if (
          element.step_id == stepId &&
          item.type.toUpperCase() === "TEXT"
        ) {
          element.children = [step];

          return;
        } else if (
          element.step_id == stepId &&
          item.type.toUpperCase() === "IMAGE"
        ) {
          element.children = [
            { ...step, url: "https://source.unsplash.com/random/880x460" },
          ];

          return;
        } else if (
          element.step_id == stepId &&
          item.type.toUpperCase() === "MAP"
        ) {
          element.children = [
            {
              ...step,
              center: locationCenter,
            },
          ];

          return;
        } else if (
          element.step_id == stepId &&
          item.type.toUpperCase() === "FLOW-CARD"
        ) {
          // const removeItem = findStep(steps, stepId);
          console.log("FLOW-CARD");
          // removeStep(steps, removeItem);
          // console.log(removeItem, stepId);
          // return (element.children = [removeItem]);
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
      } else if (item.type.toUpperCase() === "IMAGE") {
        steps.push({
          ...step,
          url: "https://source.unsplash.com/random/880x460",
        });
      } else if (item.type.toUpperCase() === "MAP") {
        steps.push({
          ...step,
          center: locationCenter,
        });
      } else {
        steps.push(step);
      }
    } else {
      setSteps(steps, step, step_id2, stepId, item);
    }
    dispatch(addFlowsStep(steps));
  };

  return { steps, handleDrop };
}

export default SetFlowsChild;
