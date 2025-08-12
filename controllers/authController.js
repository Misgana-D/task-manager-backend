const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const user = await User.register(req.body.name, req.body.email, req.body.password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, token } = await User.login(req.body.email, req.body.password);
    res.json({ user, token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};