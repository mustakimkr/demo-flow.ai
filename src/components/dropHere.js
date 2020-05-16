import React from "react";
import { ItemTypes } from "./DnD/consts/ItemTypes";
import UseDropEff from "./DnD/useDrop";
import setFlowsClild from "../components/DnD/setflowsChild";

function DragHere(props) {
  const { flowsClildren, setflowsClildren, handleDrop } = setFlowsClild();
  const accept = [
    ItemTypes.TRIGGER_TEXT,
    ItemTypes.TRIGGER_CONDITIONS,
    ItemTypes.TRIGGER_FLOW_CARD,
  ];
  const { collectedProps, drop } = UseDropEff(accept, handleDrop);

  // console.log(collectedProps);

  return (
    <React.Fragment>
      <div
        id="drop-here"
        style={{
          WebkitBoxDirection: "normal ",
          WebkitBoxOrient: "vertical",
          textAlign: "left",
          minWidth: "100%",
          position: "relative",
          display: "inline-flex",
          flexDirection: "column",
          margin: "0px",
          padding: "0px",
          transition: "opacity 0.3s ease-in-out 0s",
        }}
      >
        {flowsClildren ? (
          flowsClildren
        ) : (
          <div ref={drop} style={{ width: "220px", margin: "0px auto" }}>
            <div
              style={{
                width: "220px",
                margin: "16px auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Gilroy-Regular, sans-serif",
                fontWeight: "400",
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.65)",
                borderRadius: "6px",
                height: "56px",
                transition: "all 0.1s cubic-bezier(0.3, 0, 0, 1.3) 0.2s",
                border: "1px dashed rgb(52, 239, 119)",
                background: "rgba(52, 239, 119, 0.01)",
              }}
            >
              <span>Drag any action here…</span>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
export default DragHere;
