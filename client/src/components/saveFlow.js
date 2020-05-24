import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { flowStatus } from "../store/actions";
import Fetch from "./fetch";
import { Alert } from "react-bootstrap";

export default function SaveFlow() {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.flow.steps, shallowEqual);
  const flow_status = useSelector(
    (state) => state.flow_status.status,
    shallowEqual
  );
  const [flowTitle, setFlowTitle] = useState("Untitled");
  const [successMessage, setSuccessMessage] = useState();
  const [error, setError] = useState();

  const handleSave = async (e) => {
    e.preventDefault();
    if (steps.length == 0) return;
    const body = { flow: { steps, flow_title: flowTitle } };
    const result = await Fetch("POST", "/api/add_flow_steps", body);
    dispatch(flowStatus(!flow_status));
    if (result.code) {
      setSuccessMessage();
      setError("Something thing went wrong!!");
    }
    if (result.insertId) {
      setError();
      setSuccessMessage("Successfully saved Flow!");
    }
  };
  return (
    <React.Fragment>
      <nav
        className="navbar"
        style={{
          background: "rgb(82, 82, 91) ",
          borderBottom: "1px solid rgba(53, 53, 59, 0.5) ",
          width: "100%",
        }}
      >
        <input
          value={flowTitle}
          style={{
            background: "#28282E",
            boxShadow: "none",
            color: "#ffffff",
            border: "1px solid #28282E",
            outline: "none",
            borderRadius: "3px",
            padding: "4px",
          }}
          onChange={(e) => setFlowTitle(e.target.value)}
        />
        {successMessage ? (
          <Alert variant="success">{successMessage}</Alert>
        ) : null}
        {error ? <Alert variant="success">{error}</Alert> : null}
        <form className="form-inline">
          <button
            className="btn my-2 my-sm-0"
            style={{ backgroundColor: "#E61270", color: " rgb(255,255,255)" }}
            onClick={handleSave}
          >
            save
          </button>
        </form>
      </nav>
    </React.Fragment>
  );
}
