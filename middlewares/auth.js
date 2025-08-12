const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};