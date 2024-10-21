// backend/routes/logRoutes.js
const express = require('express');
const { getLogs, createLog } = require('../controllers/logController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getLogs);
router.post('/', authMiddleware, createLog);

module.exports = router;

