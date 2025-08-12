require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./config/db'); // Database connection

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Routes
app.get('/', (req, res) => {
  res.send('Task Manager Backend is Running!');
});

// Database test endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    res.json({ success: true, result: rows[0].solution });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Auth Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Task Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test DB endpoint: http://localhost:${PORT}/api/test-db`);
  console.log(`API Docs:
  - POST   /api/auth/register
  - POST   /api/auth/login
  - GET    /api/tasks
  - POST   /api/tasks`);
});