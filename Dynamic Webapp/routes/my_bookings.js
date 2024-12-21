const express = require('express');
const router = express.Router();

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        next(); // Proceed if authenticated
    } else {
        res.redirect('/signin'); // Redirect to sign-in if not authenticated
    }
};

// Render My Bookings Page
router.get('/', isAuthenticated, (req, res) => {
    const user = req.session.user; // Get user data from session
    res.render('my_bookings', { user }); // Render 'my_bookings' EJS template
});

module.exports = router;
