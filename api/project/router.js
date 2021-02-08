// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const db = require("./model");

router.get("/", async (req, res) => {
  try {
    const projects = await db.find();
    res.status(201).json(projects);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const task = await db.findById(id);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ messege: "Error" });
  }
});

router.post("/", async (req, res) => {
  const newProject = req.body;
  try {
    const project = await db.insert(newProject);
    res.status(201).json(project);
  } catch {
    res.status(500).json({ messege: "Server Error" });
  }
});

module.exports = router;
