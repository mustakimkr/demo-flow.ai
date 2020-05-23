import React from "react";
import { useSelector, shallowEqual } from "react-redux";

export default function SaveFlow() {
  const steps = useSelector((state) => state.flow.steps, shallowEqual);
  return (
    <React.Fragment>
      <nav className="navbar ">
        <a className="navbar-brand">flow</a>
        <form className="form-inline">
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <button
            className="btn btn-success my-2 my-sm-0"
            onClick={(e) => {
              e.preventDefault();
              console.log(steps);
            }}
          >
            save
          </button>
        </form>
      </nav>
    </React.Fragment>
  );
}
