// ticketRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

// POST Route for Booking a Ticket
router.post('/book', authMiddleware, async (req, res) => {
  const { ticketType, ticketId, quantity } = req.body; // ticketType will be 'movie', 'event', or 'concert'

  try {
    if (!ticketType || !ticketId || !quantity) {
      return res.status(400).json({ message: 'All fields (ticketType, ticketId, quantity) are required' });
    }

    console.log('Received ticketType:', ticketType); // Debugging log
    console.log('Received ticketId:', ticketId); // Debugging log
    console.log('Received quantity:', quantity); // Debugging log

    // Get the price for the selected ticket
    const priceQuery = `
      SELECT price FROM tickets WHERE id = $1 AND type = $2
    `;
    const priceResult = await pool.query(priceQuery, [ticketId, ticketType]);

    console.log('Price result:', priceResult.rows); // Debugging log

    if (priceResult.rows.length === 0) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    const price = priceResult.rows[0].price;
    const totalCost = price * quantity;

    // Insert booking into the database
    const newBooking = await pool.query(
      'INSERT INTO bookings (user_id, ticket_type, ticket_id, quantity, total_cost) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.user.id, ticketType, ticketId, quantity, totalCost]
    );

    res.status(201).json({ message: 'Ticket booked successfully', booking: newBooking.rows[0] });
  } catch (err) {
    console.error('Booking Error:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
