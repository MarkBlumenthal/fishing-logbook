// backend/app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const logRoutes = require('./routes/logRoutes');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/logs', logRoutes);

const PORT = process.env.PORT || 5000;

db.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to the database', err);
});

