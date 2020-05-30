import React from "react";
import "../assets/css/flows.css";
import { Row, Col } from "react-bootstrap";
import AsideActions from "../components/asideActions";
import DropHere from "../components/dropHere";
import setFlowsClild from "../components/DnD/setflowsChild";
import SaveFlow from "../components/saveFlow";
import { useDispatch } from "react-redux";
import { changeAsideBar } from "../store/actions";

function Flows(props) {
  const dispatch = useDispatch();
  const { steps, handleDrop } = setFlowsClild();

  const handleAsideBar = () => {
    dispatch(changeAsideBar({ status: "default" }));
  };

  return (
    <Row>
      <Col
        style={{
          background: "rgb(82,82,91)",
          height: "calc(100vh - 4rem)",
          overflow: "auto",
        }}
        lg={8}
        onClick={handleAsideBar}
      >
        <SaveFlow />

        <div>
          <DropHere handleDrop={handleDrop} stepChild={steps} />
        </div>
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

export default Flows;
