import React from "react";
import { ItemTypes } from "./DnD/consts/ItemTypes";
import UseDropEff from "./DnD/useDrop";
import setFlowsClild from "../components/DnD/setflowsChild";
import { connect } from "react-redux";

function DropHere(props) {
  const { flowsClildren, setflowsClildren, handleDrop } = setFlowsClild();
  const accept = [
    ItemTypes.TRIGGER_TEXT,
    ItemTypes.TRIGGER_CONDITIONS,
    ItemTypes.TRIGGER_FLOW_CARD,
  ];
  const { collectedDropProps, drop } = UseDropEff(accept, handleDrop);
  const isDragging = props.dragProps.dragColProps.isDragging;
  console.log(isDragging);
  // let opacity = 0;
  // if (isDragging) {
  //   opacity = 1;
  // }

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
          scrollBehavior: "auto",
        }}
      >
        <div ref={drop} style={{ width: "220px", margin: "0px auto" }}>
          <div
            style={
              flowsClildren
                ? {
                    width: 220,
                    marginRight: "auto",
                    marginLeft: "auto",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Gilroy-Regular, sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    color: "rgba(255, 255, 255, 0.65)",
                    borderRadius: 6,
                    height: isDragging ? 64 : 16,
                    transition: "all 0.1s cubic-bezier(0.3, 0, 0, 1.3) 0.2s",
                  }
                : {
                    width: 220,
                    margin: "16px auto",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Gilroy-Regular, sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    color: "rgba(255, 255, 255, 0.65)",
                    borderRadius: 6,
                    height: 56,
                    transition: "all 0.1s cubic-bezier(0.3, 0, 0, 1.3) 0.2s",
                    border: "1px dashed rgb(52, 239, 119)",
                    background: "rgba(52, 239, 119, 0.01)",
                  }
            }
          >
            {flowsClildren ? (
              <div
                style={{
                  opacity: isDragging ? 1 : 0,
                  background: "rgba(52, 239, 119, 0.024)",
                  border: "1px dashed rgb(52, 239, 119)",
                  borderRadius: 6,
                  height: "24px",
                  width: "100%",
                  transition: "all 0.3s cubic-bezier(0.3, 0, 0, 1.3) 0s",
                }}
              ></div>
            ) : (
              <span>Drag any action here…</span>
            )}
          </div>
        </div>
        {flowsClildren ? flowsClildren : null}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    dragProps: state.dragProps,
  };
};

export default connect(mapStateToProps, null)(DropHere);
