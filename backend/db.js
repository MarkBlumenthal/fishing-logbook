// backend/db.js
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/fishing_logbook',
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    connect: () => pool.connect(),
};

