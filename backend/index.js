require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const pool = require('./config/db');
const authMiddleware = require('./middleware/authMiddleware'); 

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

app.get('/', (req, res) => {
  res.send('Ticket Meow Backend is Running!');
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(result.rows);
  } catch (err) {
    res.status(500).send('Database connection failed');
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);

app.get('/api/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
