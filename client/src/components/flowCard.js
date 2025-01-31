import React, { useRef, useState } from "react";
import "../assets/css/flowCard.css";
import UseDragEff from "./DnD/useDrag";
import { ItemTypes } from "./DnD/consts/ItemTypes";
import UseDropEff from "./DnD/useDrop";
import handleFlowCard from "./DnD/handleFlowCard";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addFlowsStep } from "../store/actions";
import { findStep, removeStep } from "./doFunctions";

export default function FlowCard(props) {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.flow.steps, shallowEqual);
  const dragId = useSelector((state) => state.dndProps.drag_id, shallowEqual);
  const [cardText, setCardText] = useState(props.step.title);

  const ref = useRef(null);
  //Handle Drag
  const { collectedDragProps, drag } = UseDragEff(
    {
      id: 1,
      type: ItemTypes.TRIGGER_FLOW_CARD,
    },
    props.targetId
  );
  //Handle Drop
  const { handleDrop } = handleFlowCard(steps, dragId);
  const accept = [ItemTypes.TRIGGER_FLOW_CARD];
  const { collectedDropProps, drop } = UseDropEff(
    accept,
    handleDrop,
    props.targetId
  );

  // // set class to previwed dropzoon
  // if (collectedDragProps.isDragging == true) {
  //   document.querySelectorAll("._1qbqxqi").forEach((el) => {
  //     el.classList.remove("_1qbqxqi");
  //     el.classList.add("_sdt4d52");
  //   });
  // } else {
  //   document.querySelectorAll("._sdt4d52").forEach((el) => {
  //     el.classList.add("_1qbqxqi");
  //     el.classList.remove("_sdt4d52");
  //   });
  // }

  const removeCard = () => {
    const removeItem = findStep(steps, props.targetId);

    removeStep(steps, removeItem);
    const newSteps = JSON.parse(JSON.stringify(steps));
    dispatch(addFlowsStep(newSteps));
  };

  drag(drop(ref));
  return (
    <div className="_1wm26yt" draggable="true" id={props.targetId} ref={ref}>
      <div className="_eaywwnd">
        <div className="_wnmcvr">
          <header className="_1o1vgd9">
            <i className="_8v503m">
              <svg
                width="9px"
                height="9px"
                viewBox="0 0 9 9"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>icon-branch-intent</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="icon-flow-intent">
                    <rect
                      id="Rectangle"
                      fillOpacity="0.01"
                      fill="#D8D8D8"
                      fillRule="evenodd"
                      x={0}
                      y={0}
                      width={9}
                      height={9}
                    />
                    <path
                      d="M5,2 L5,7.99478046 L4,7.99478046 L4,2 L2,2 L2,4 L1,4 L1,2 L1,1 L8,1 L8,2 L8,4 L7,4 L7,2 L5,2 Z M3,8 L6,8 L6,9 L3,9 L3,8 Z"
                      fillOpacity="0.8"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </svg>
            </i>
            <div className="_1yuy063o" aria-label="Intent…" title="Intent…">
              Intent…
            </div>
            <i title="Exact matching only" className="_1uybrgq">
              <svg
                width="13px"
                height="15px"
                viewBox="0 0 13 15"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                  opacity="0.802"
                >
                  <g
                    id="Group"
                    transform="translate(-470.000000, -973.000000)"
                    fill="#FFFFFF"
                  >
                    <g
                      id="icon-exact-match-small"
                      transform="translate(470.000000, 973.000000)"
                    >
                      <path
                        d="M1.99971429,0.999705882 C3.10371429,0.999705882 4.00028571,1.89617647 4.00028571,3 C4.00028571,3.73764706 3.59657143,4.37647059 3,4.72323529 L3,11.2773529 C3.59657143,11.6241176 4.00028571,12.2611765 4.00028571,12.9997059 C4.00028571,14.1026471 3.10285714,15 1.99971429,15 C0.896571429,15 0,14.1035294 0,12.9997059 C0,12.2611765 0.404571429,11.6232353 1.00028571,11.2773529 L1.00028571,4.72323529 C0.404571429,4.37647059 0,3.73764706 0,3 C0,1.89617647 0.895714286,0.999705882 1.99971429,0.999705882 Z M1.99971429,14.0002941 C2.55342857,14.0002941 3,13.5529412 3,12.9997059 C3,12.4482353 2.55342857,12 1.99971429,12 C1.44857143,12 1.00028571,12.4482353 1.00028571,12.9997059 C1.00028571,13.5529412 1.44857143,14.0002941 1.99971429,14.0002941 Z M1.99971429,3.99970588 C1.44857143,3.99970588 1.00028571,3.55323529 1.00028571,3 C1.00028571,2.44676471 1.44857143,2.00029412 1.99971429,2.00029412 C2.55342857,2.00029412 3,2.44676471 3,3 C3,3.55323529 2.55342857,3.99970588 1.99971429,3.99970588 Z M11.4994286,11.2773529 C12.0951429,11.6241176 12.4997143,12.2611765 12.4997143,12.9997059 C12.4997143,14.1026471 11.6031429,15 10.5,15 C9.396,15 8.49942857,14.1035294 8.49942857,12.9997059 C8.49942857,12.2602941 8.904,11.6232353 9.49971429,11.2773529 L9.49971429,5.00029412 C9.49971429,5.00029412 9.38142857,3.99970588 8.49942857,3.99970588 L7.5,3.99970588 L7.5,6 L4.5,3 L7.5,0 L7.5,2.00029412 L8.49942857,2.00029412 C8.49942857,2.00029412 11.4994286,1.99147059 11.4994286,5.00029412 L11.4994286,11.2773529 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
            <div
              className="_1ys8svr headerActions"
              onClick={() => {
                if (
                  document
                    .querySelector(`#card_menu_${props.targetId}`)
                    .classList.value.includes("active")
                ) {
                  return document
                    .querySelector(`#card_menu_${props.targetId}`)
                    .classList.remove("active");
                }

                document
                  .querySelector(`#card_menu_${props.targetId}`)
                  .classList.add("active");
              }}
            >
              <span className="_o5j1w6">
                <span className="_o5j1w6">
                  <div className="_1qt6cki ">
                    <div className="_zdxht7 _1k1bmwe ">
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={4}
                          height={16}
                          viewBox="0 0 4 16"
                        >
                          <g fill="none">
                            <path
                              d="M2 4C0.9 4 0 3.1 0 2 0 0.9 0.9 0 2 0 3.1 0 4 0.9 4 2 4 3.1 3.1 4 2 4ZM2 10C0.9 10 0 9.1 0 8 0 6.9 0.9 6 2 6 3.1 6 4 6.9 4 8 4 9.1 3.1 10 2 10ZM2 16C0.9 16 0 15.1 0 14 0 12.9 0.9 12 2 12 3.1 12 4 12.9 4 14 4 15.1 3.1 16 2 16Z"
                              fill="#FFF"
                            />
                          </g>
                        </svg>
                      </i>
                    </div>
                  </div>
                </span>
                <span className="_1c7soczr" id={`card_menu_${props.targetId}`}>
                  <div className="_1s17xks">
                    <div className="_yxh25i0">
                      <a className="_1xjtd7z7" onClick={removeCard}>
                        <div className="_1rux9fe">
                          <i className="_hjc27n">
                            <svg
                              width="14px"
                              height="16px"
                              viewBox="0 0 14 16"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>menu-delete</title>
                              <desc>Created with Sketch.</desc>
                              <g
                                id="Page-1"
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="menu-delete"
                                  fill="#BABABE"
                                  fillRule="nonzero"
                                >
                                  <path
                                    d="M13.3,2.04444444 C13.3875,2.04444444 13.5625,2.04444444 13.65,2.13333333 C13.7375,2.22222222 13.825,2.4 13.825,2.48888889 C13.825,2.66666667 13.7375,2.75555556 13.65,2.84444444 C13.5625,2.93333333 13.3875,3.02222222 13.3,3.02222222 L12.425,3.02222222 L11.725,14.3111111 C11.725,14.7555556 11.55,15.2 11.2,15.5555556 C10.85,15.8222222 10.5,16 10.0625,16 L3.7625,16 C3.325,16 2.975,15.8222222 2.625,15.4666667 C2.275,15.2 2.1,14.7555556 2.1,14.3111111 L1.4,3.02222222 L0.525,3.02222222 C0.35,3.02222222 0.2625,2.93333333 0.175,2.84444444 C0.0875,2.75555556 0,2.66666667 0,2.48888889 C0,2.4 0.0875,2.22222222 0.175,2.13333333 C0.2625,2.04444444 0.35,2.04444444 0.525,2.04444444 L3.9375,2.04444444 L3.9375,1.51111111 C3.9375,1.06666667 4.1125,0.711111111 4.375,0.444444444 C4.6375,0.177777778 4.9875,-2.22044605e-16 5.425,-2.22044605e-16 L8.4,-2.22044605e-16 C8.8375,-2.22044605e-16 9.1,0.177777778 9.45,0.444444444 C9.7125,0.711111111 9.8875,1.06666667 9.8875,1.51111111 L9.8875,2.04444444 L13.3,2.04444444 Z M4.9,1.51111111 L4.9,2.04444444 L8.8375,2.04444444 L8.8375,1.51111111 C8.8375,1.33333333 8.8375,1.24444444 8.75,1.15555556 C8.6625,1.06666667 8.4875,0.977777778 8.4,0.977777778 L5.425,0.977777778 C5.25,0.977777778 5.1625,1.06666667 5.075,1.15555556 C4.9875,1.24444444 4.9,1.33333333 4.9,1.51111111 Z M10.7625,14.2222222 L11.375,3.02222222 L2.3625,3.02222222 L3.0625,14.2222222 C3.0625,14.4888889 3.15,14.6666667 3.2375,14.7555556 C3.4125,14.9333333 3.5875,15.0222222 3.7625,15.0222222 L9.975,15.0222222 C10.2375,15.0222222 10.4125,14.9333333 10.5,14.7555556 C10.675,14.5777778 10.675,14.4 10.7625,14.2222222 L10.7625,14.2222222 Z M6.9125,4 C7,4 7.175,4.08888889 7.2625,4.17777778 C7.35,4.26666667 7.35,4.35555556 7.35,4.53333333 L7.35,13.5111111 C7.35,13.6 7.35,13.7777778 7.2625,13.8666667 C7.175,13.9555556 7,14.0444444 6.9125,14.0444444 C6.7375,14.0444444 6.65,13.9555556 6.5625,13.8666667 C6.475,13.7777778 6.3875,13.6 6.3875,13.5111111 L6.3875,4.53333333 C6.3875,4.35555556 6.475,4.26666667 6.5625,4.17777778 C6.65,4.08888889 6.7375,4 6.9125,4 Z M4.375,4 C4.55,4 4.6375,4 4.725,4.08888889 C4.9,4.17777778 4.9,4.35555556 4.9,4.44444444 L5.425,13.5111111 C5.425,13.6 5.3375,13.7777778 5.25,13.8666667 C5.1625,13.9555556 5.075,13.9555556 4.9875,14.0444444 L4.9,14.0444444 C4.8125,14.0444444 4.6375,13.9555556 4.55,13.8666667 C4.4625,13.7777778 4.4625,13.6888889 4.4625,13.5111111 L3.9375,4.53333333 C3.9375,4.35555556 3.9375,4.26666667 4.025,4.17777778 C4.1125,4.08888889 4.2875,4 4.375,4 Z M8.8375,4.44444444 C8.8375,4.35555556 8.925,4.17777778 9.0125,4.08888889 C9.1,4 9.275,4 9.3625,4 C9.5375,4 9.625,4.08888889 9.7125,4.17777778 C9.8,4.26666667 9.8875,4.35555556 9.8875,4.53333333 L9.3625,13.5111111 C9.3625,13.6888889 9.275,13.7777778 9.1875,13.8666667 C9.1,13.9555556 9.0125,14.0444444 8.8375,14.0444444 C8.6625,13.9555556 8.575,13.9555556 8.4875,13.8666667 C8.4,13.7777778 8.4,13.6 8.4,13.5111111 L8.8375,4.44444444 Z"
                                    id="Shape"
                                  />
                                </g>
                              </g>
                            </svg>
                          </i>
                          <span className="_xh1roz">Remove</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </header>
          <div className="_jucu17">
            <textarea
              className="_ryx1zms"
              placeholder="User says…"
              rows={1}
              style={{
                overflow: "hidden",
                overflowWrap: "break-word",
                height: 16,
              }}
              value={props.step.title}
              onChange={(e) => {
                setCardText(e.target.value);
                props.step.title = e.target.value;
              }}
            />
            <a href="#" className="_1se5c7a">
              Train
            </a>
          </div>
        </div>
      </div>
      <div className="_1qbqxqi"></div>
    </div>
  );
}
