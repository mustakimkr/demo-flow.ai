const express = require("express");
const dbQuery = require("../db/query");
const router = new express.Router();

router.get("/api/fetch_flows", async (req, res) => {
  try {
    const insertSteps = `SELECT id,flow_title FROM flow_steps;`;
    const flowSteps = await dbQuery(insertSteps);
    res.send(flowSteps);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/api/fetch_flow_steps", async (req, res) => {
  try {
    const insertSteps = `SELECT steps FROM flow_steps WHERE id=?;`;
    const insertValue = [req.body.id];
    const flowSteps = await dbQuery(insertSteps, insertValue);
    res.send(flowSteps);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/api/add_flow_steps", async (req, res) => {
  try {
    const steps = JSON.stringify(req.body.flow);
    const { flow_title } = req.body.flow;
    const insertSteps = `INSERT INTO flow_steps (steps,flow_title) 
      VALUES (?,?)`;
    const insertValue = [steps, flow_title];
    const flowSteps = await dbQuery(insertSteps, insertValue);
    res.send(flowSteps);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
