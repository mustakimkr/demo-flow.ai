import React from "react";
import "../assets/css/flowImage.css";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { findStep, removeStep } from "./doFunctions";
import { addFlowsStep, changeAsideBar } from "../store/actions";
import GoogleMapReact from "google-map-react";

export default function FlowImage(props) {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.flow.steps, shallowEqual);

  const removeCard = () => {
    const removeItem = findStep(steps, props.targetId);

    removeStep(steps, removeItem);
    const newSteps = JSON.parse(JSON.stringify(steps));
    dispatch(addFlowsStep(newSteps));
  };
  const handleAsideBar = (e, stepType) => {
    e.stopPropagation();
    dispatch(
      changeAsideBar({
        status: stepType,
        step_id: props.step.step_id,
      })
    );
  };
  return (
    <div className="_1f2sk2k">
      <div className="_3hmsj">
        <div className="_lxsbgw">
          <div
            className="_1mwwz0na"
            draggable="true"
            onClick={(e) => handleAsideBar(e, props.step.type)}
            style={{ borderColor: "transparent" }}
          >
            <i className="_1qj5qdm">
              <svg
                width="7px"
                height="27px"
                viewBox="0 0 7 27"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>icoActionConnectFirst</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="icon-condition-copy-3"
                    transform="translate(-212.000000, 0.000000)"
                    fill="#FFFFFF"
                  >
                    <g
                      id="icoActionConnectFirst"
                      transform="translate(212.000000, 0.000000)"
                    >
                      <path
                        d="M0.00898613201,3.25025487 C0.140448071,1.41922626 1.66425819,0.000898384862 3.5,0.000898384862 C5.33574181,0.000898384862 6.85955193,1.41922626 6.99101387,3.25025487 C7.12247581,5.08128347 5.81691319,6.70275117 4,6.965 L4,20.035 C5.81691319,20.2972488 7.12247581,21.9187165 6.99101387,23.7497451 C6.85955193,25.5807737 5.33574181,26.9991016 3.5,26.9991016 C1.66425819,26.9991016 0.140448071,25.5807737 0.00898613201,23.7497451 C-0.122475807,21.9187165 1.18308681,20.2972488 3,20.035 L3,6.966 C1.18308681,6.70275117 -0.122475807,5.08128347 0.00898613201,3.25025487 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </i>
            <div className="_9w6apn">
              <header className="_1ygbkh8">
                <div
                  className="_10bh56q"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  {props.step.type === "IMAGE" ? "Send image" : "Send map"}
                </div>
                <div
                  className="_tbbw7u headerActions"
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={4}
                            height={16}
                            viewBox="0 0 4 16"
                          >
                            <g>
                              <path
                                fill="rgba(255,255,255,1)"
                                d="M2 4C0.9 4 0 3.1 0 2 0 0.9 0.9 0 2 0 3.1 0 4 0.9 4 2 4 3.1 3.1 4 2 4ZM2 10C0.9 10 0 9.1 0 8 0 6.9 0.9 6 2 6 3.1 6 4 6.9 4 8 4 9.1 3.1 10 2 10ZM2 16C0.9 16 0 15.1 0 14 0 12.9 0.9 12 2 12 3.1 12 4 12.9 4 14 4 15.1 3.1 16 2 16Z"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </span>

                    <span
                      className="_1c7soczr"
                      id={`card_menu_${props.targetId}`}
                    >
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
              {props.step.type === "IMAGE" ? (
                <div className="_1tpmf84">
                  <div>
                    <div className="_kdlnrt">
                      <div
                        title="Example title"
                        role="img"
                        aria-label="Example title"
                        className="_1xv8pj0"
                        style={{
                          backgroundImage: `url(${props.step.url})`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {props.step.type === "MAP" ? (
                <div className="_1tpmf84">
                  <div>
                    <div className="_kdlnrt">
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "AIzaSyAoEsOs6W4KyyTc_EN-33hD8fnNSyr0gyQ",
                        }}
                        defaultCenter={props.step.center}
                        defaultZoom={11}
                      >
                        <div
                          lat={props.step.center.lat}
                          lng={props.step.center.lng}
                        ></div>
                      </GoogleMapReact>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
