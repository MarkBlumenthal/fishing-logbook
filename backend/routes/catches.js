// backend/routes/catches.js
const express = require('express');
const db = require('../db');
const router = express.Router();

// Add catch
router.post('/', async (req, res) => {
  const { user_id, species, size, weight, location, bait, technique, catch_date, comments, photo_url } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO catches (user_id, species, size, weight, location, bait, technique, catch_date, comments, photo_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [user_id, species, size, weight, location, bait, technique, catch_date, comments, photo_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch user's catches
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const result = await db.query('SELECT * FROM catches WHERE user_id = $1', [user_id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
