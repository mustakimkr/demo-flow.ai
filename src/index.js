const express = require("express");
const path = require("path");
const flowSteps = require("./routes/flow_steps");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(flowSteps);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, return all requests to React app
  app.post("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
