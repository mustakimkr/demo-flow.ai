import React from "react";
function Navbar(props) {
  return (
    <React.Fragment>
      <nav
        style={{
          height: "4rem",
          width: "100%",
          backgroundColor: "#000000",
          position: "sticky",
          top: 0,
          zIndex: 1040,
        }}
        className="navbar"
      >
        <div
          style={{
            width: "150px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <a
            className="navbar-brand"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "Gilroy-Medium, sans-serif !important",
                color: "rgba(255, 255, 255, 0.85)",
              }}
            >
              Flow
            </span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Navbar;
