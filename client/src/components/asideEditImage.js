import React, { useState } from "react";
import { Col } from "react-bootstrap";

function AsideEditImage(props) {
  const [stepTitle, setStepTitle] = useState(props.step.title);
  const [stepURL, setStepURL] = useState(props.step.url);

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

              <div className="_1ws0qi8">URL</div>
              <label className="_13nucv6">
                <div className="_e296pg">
                  <div>
                    <input
                      className="_n9jld4"
                      type="text"
                      placeholder="URL of the image"
                      name="url"
                      autoComplete="off"
                      value={stepURL}
                      onChange={(e) => {
                        props.step.url = e.target.value;
                        setStepURL(e.target.value);
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

export default AsideEditImage;
