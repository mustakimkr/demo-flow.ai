import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addFlow } from "../../store/actions";
import Fetch from "../fetch";

function Sidebar(props) {
  const dispatch = useDispatch();
  const [flowList, setFlowList] = useState();
  const [loading, setLoading] = useState(true);
  const flow_status = useSelector(
    (state) => state.flow_status.status,
    shallowEqual
  );
  useEffect(() => {
    async function fetchData() {
      const flowList = await Fetch("GET", "/api/fetch_flows");
      setFlowList(flowList);
      setLoading(false);
    }
    fetchData();
  }, [flow_status]);

  const FetchSteps = async (id) => {
    const steps = await Fetch("POST", "/api/fetch_flow_steps", { id });

    dispatch(addFlow(JSON.parse(steps[0].steps)));
  };
  return (
    <div
      className="sidebar d-flex flex-column"
      style={{
        position: "sticky",
        top: "4rem",
        height: "calc(100vh - 4rem)",
        background: "rgb(40,40,46)",
        zIndex: 1000,
      }}
    >
      {loading == false
        ? flowList.map((flow, key) => (
            <div
              key={key}
              className="side-nav-items"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={() => FetchSteps(flow.id)}
              >
                {flow.flow_title}
              </a>
            </div>
          ))
        : null}
    </div>
  );
}

export default Sidebar;
