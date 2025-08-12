const pool = require('../config/db');

class Task {
  static async getAll(userId) {
    const [tasks] = await pool.execute(
      'SELECT * FROM tasks WHERE user_id = ?',
      [userId]
    );
    return tasks;
  }

  static async create(title, userId) {
    const [result] = await pool.execute(
      'INSERT INTO tasks (title, user_id) VALUES (?, ?)',
      [title, userId]
    );
    return { id: result.insertId, title, user_id: userId, completed: false };
  }
}

module.exports = Task;