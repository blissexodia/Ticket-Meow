const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getDashboardData } = require('../../controllers/dashboardcontroller');  // Import controller

// Dashboard Route (Protected)
router.get('/dashboard', authMiddleware, getDashboardData);  // Use controller method

module.exports = router;
