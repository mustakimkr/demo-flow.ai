import React from "react";
import "../assets/css/asidebar.css";
import { Row, Col, Nav } from "react-bootstrap";
import ActionButton from "./actionButton";
import { ItemTypes } from "./DnD/consts/ItemTypes";
import { useSelector, shallowEqual } from "react-redux";
import AsideEditImage from "./asideEditImage";
import AsideEditMap from "./asideEditMap";
import { findStep } from "./doFunctions";

function AsideActions() {
  const props_aside_bar = useSelector((state) => state.aside_bar, shallowEqual);
  const steps = useSelector((state) => state.flow.steps, shallowEqual);
  const step = findStep(steps, props_aside_bar.step_id);

  const draggbleTriggers = [
    { id: 1, type: ItemTypes.TRIGGER_TEXT },
    { id: 2, type: ItemTypes.TRIGGER_CONDITIONS },
    { id: 3, type: ItemTypes.TRIGGER_IMAGE },
    { id: 4, type: ItemTypes.TRIGGER_MAP },
  ];
  return (
    <React.Fragment>
      <Row style={{ flexDirection: "column" }}>
        {/* <Col>
          <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link eventKey="link-0">ACTIONS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">INTENTS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">FLOW</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col> */}
        <Col>
          <Row
            style={{
              flexDirection: "column",
              paddingLeft: "24px",
              paddingTop: "16px",
            }}
          >
            {props_aside_bar.status === "default" ? (
              <React.Fragment>
                <Col
                  style={{
                    fontFamily: "Gilroy-Medium, sans-serif",
                    fontWeight: "400",
                    fontSize: "12px",
                    color: "rgba(255, 255, 255, 0.65)",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                    margin: "12px 0px 8px",
                  }}
                >
                  TRIGGERS
                </Col>
                <Col>
                  <Row>
                    {draggbleTriggers.map((dragTrigger, id) => (
                      <div
                        style={{
                          width: "calc(25% - 8px)",
                          marginRight: "8px",
                        }}
                        key={id}
                      >
                        <ActionButton dragTrigger={dragTrigger} />
                      </div>
                    ))}
                  </Row>
                </Col>
              </React.Fragment>
            ) : null}
            {props_aside_bar.status === "IMAGE" ? (
              <AsideEditImage step={step} />
            ) : null}
            {props_aside_bar.status === "MAP" ? (
              <AsideEditMap step={step} />
            ) : null}
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default AsideActions;
