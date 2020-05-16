import React from "react";
import "../assets/css/flows.css";
import { Row, Col } from "react-bootstrap";
import AsideActions from "../components/asideActions";
import DropHere from "../components/dropHere";

function flows(props) {
  return (
    <Row>
      <Col
        style={{
          background: "rgb(82,82,91)",
          height: "calc(100vh - 4rem)",
          overflow: "auto",
        }}
        lg={8}
      >
        <DropHere />
      </Col>
      <Col
        lg={4}
        style={{ background: "rgb(40,40,46)", height: "calc(100vh - 4rem)" }}
      >
        <AsideActions />
      </Col>
    </Row>
  );
}

export default flows;
