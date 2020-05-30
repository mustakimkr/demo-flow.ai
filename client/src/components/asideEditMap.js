import React, { useState } from "react";
import { Col } from "react-bootstrap";

function AsideEditMap(props) {
  const [stepTitle, setStepTitle] = useState(props.step.title);
  const [stepLat, setStepLat] = useState(props.step.center.lat);
  const [stepLng, setStepLng] = useState(props.step.center.lng);

  return (
    <div className="_190hxbq">
      <div className="_1yfus1e">
        <div title="Image">
          <div className="_tc3whe" style={{ padding: 0 }}>
            <div className="_1fp9n8n">
              <div className="_1ws0qi8">Title</div>
              <label className="_13nucv6">
                <div className="_e296pg">
                  <div>
                    <input
                      className="_n9jld4"
                      type="text"
                      placeholder="Title"
                      name="title"
                      autoComplete="off"
                      value={stepTitle}
                      onChange={(e) => {
                        props.step.title = e.target.value;
                        setStepTitle(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </label>
              <div className="_1ws0qi8">Latitude</div>
              <label className="_13nucv6">
                <div className="_e296pg">
                  <div>
                    <input
                      className="_n9jld4"
                      type="text"
                      placeholder="latitude"
                      name="Latitude"
                      autoComplete="off"
                      value={stepLat}
                      onChange={(e) => {
                        props.step.center.lat = e.target.value;
                        setStepLat(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </label>
              <div className="_1ws0qi8">Longitude</div>
              <label className="_13nucv6">
                <div className="_e296pg">
                  <div>
                    <input
                      className="_n9jld4"
                      type="text"
                      placeholder="longitude"
                      name="longitude"
                      autoComplete="off"
                      value={stepLng}
                      onChange={(e) => {
                        props.step.center.lng = e.target.value;
                        setStepLng(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideEditMap;
