// Import necessary modules
const express = require('express');
const router = express.Router();

// Logout route for session-based authentication
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Could not log out', error: err });
        }
        // Redirect to the homepage after logging out
        res.redirect('/');
    });
});

module.exports = router;
