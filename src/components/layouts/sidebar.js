import React from "react";

const Sidebar = (props) => {
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
      <div
        className="side-nav-items"
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
          Flows
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
