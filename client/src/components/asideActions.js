import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import ActionButton from "./actionButton";
import { ItemTypes } from "./DnD/consts/ItemTypes";

const asideActions = () => {
  const draggbleTriggers = [
    { id: 1, type: ItemTypes.TRIGGER_TEXT },
    { id: 2, type: ItemTypes.TRIGGER_CONDITIONS },
    { id: 3, type: ItemTypes.TRIGGER_EVENT },
  ];
  return (
    <React.Fragment>
      <Row style={{ flexDirection: "column" }}>
        <Col>
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
        </Col>
        <Col>
          <Row
            style={{
              flexDirection: "column",
              paddingLeft: "24px",
              paddingTop: "16px",
            }}
          >
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
                  <Col key={id}>
                    <ActionButton dragTrigger={dragTrigger} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default asideActions;
