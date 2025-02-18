const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from Authorization header (Bearer token format)
  const token = req.header('Authorization')?.split(' ')[1];

  // If no token is found
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded;

    // Log user info for debugging purposes (optional)
    console.log('Authenticated User:', req.user);

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Log token verification errors for debugging
    console.error('Token verification error:', err.message);

    // Send a 401 status with an error message
    res.status(401).json({ message: 'Token is not valid', error: err.message });
  }
};

module.exports = authMiddleware;
