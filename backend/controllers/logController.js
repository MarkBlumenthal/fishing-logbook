// backend/controllers/logController.js
const db = require('../db');

const getLogs = async (req, res) => {
    const result = await db.query('SELECT * FROM logs WHERE user_id = $1', [req.user.userId]);
    res.json(result.rows);
};

const createLog = async (req, res) => {
    const { fishType, weight, location, date } = req.body;
    const result = await db.query('INSERT INTO logs (user_id, fish_type, weight, location, date) VALUES ($1, $2, $3, $4, $5) RETURNING *', [req.user.userId, fishType, weight, location, date]);
    res.json(result.rows[0]);
};

module.exports = { getLogs, createLog };
