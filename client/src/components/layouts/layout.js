import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Col, Row } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

function layout(props) {
  return (
    <React.Fragment>
      <Row className="m-0">
        <Col>
          <Row>
            <Navbar />
          </Row>
          <Row className="d-flex">
            <Col lg={2} className="p-0">
              <Sidebar />
            </Col>
            <DndProvider backend={Backend}>
              <Col lg={10}>{props.children}</Col>
            </DndProvider>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default layout;
