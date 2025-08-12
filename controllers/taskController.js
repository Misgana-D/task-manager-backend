const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll(req.user.id);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body.title, req.user.id);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};