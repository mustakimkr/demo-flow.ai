import React from "react";
import FlowCard from "./flowCard.js";
import ConditionsFlow from "./conditionsFlow";
import DropHere from "../components/dropHere";
import FlowImage from "../components/flowImage";

function DropChild(props) {
  return props.steps.map((step, id) =>
    id === 0 ? (
      <div
        key={id}
        className="_rz4cq8"
        style={{
          transform: "scale(1)",
          paddingTop: step.step_id === 100 ? "24px" : 0,
        }}
      >
        <div
          className="_xn0spvi"
          style={{ padding: step.step_id === 100 ? "40px 0px 0px" : 0 }}
        >
          {step.step_id === 100 ? (
            <i className="_1syfl5k" id={step.step_id}>
              <svg width={9} height={27} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 6.965v17.92l2.656-2.938a.41.41 0 0 1 .328-.172c.073 0 .141.014.204.043a.393.393 0 0 1 .156.129.425.425 0 0 1 .117.172.578.578 0 0 1 .04.206.513.513 0 0 1-.04.198.438.438 0 0 1-.117.163L4.5 27 .656 22.72a.59.59 0 0 1-.156-.395c0-.07.013-.135.04-.198a.622.622 0 0 1 .116-.18c.04-.056.094-.1.157-.13A.447.447 0 0 1 1 21.776c.063 0 .125.014.188.043a.393.393 0 0 1 .156.129L4 24.886V6.964a3.5 3.5 0 1 1 1 0zM4.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                  fill="#FFF"
                  fillRule="evenodd"
                />
              </svg>
            </i>
          ) : null}
          {step.item_id == 1 ? (
            <React.Fragment>
              <FlowCard
                targetId={step.step_id}
                handleDrop={props.handleDrop}
                step={step}
              />
              <DropHere
                handleDrop={props.handleDrop}
                stepId={step.step_id}
                stepChild={step.children}
              />
            </React.Fragment>
          ) : null}
          {step.item_id == 2 ? (
            <ConditionsFlow handleDrop={props.handleDrop} steps={props.steps} />
          ) : null}
          {step.item_id == 3 || step.item_id == 4 ? (
            <React.Fragment>
              <FlowImage targetId={step.step_id} step={step} />
              <DropHere
                handleDrop={props.handleDrop}
                stepId={step.step_id}
                stepChild={step.children}
              />
            </React.Fragment>
          ) : null}
        </div>
      </div>
    ) : null
  );
}

export default DropChild;
