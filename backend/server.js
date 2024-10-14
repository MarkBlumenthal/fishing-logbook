// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const catchesRoutes = require('./routes/catches');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/catches', catchesRoutes);

// Placeholder for routes
app.get('/', (req, res) => {
  res.send('Fishing Logbook API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
