const express = require('express');
const router = express.Router();

// Render the Sign-in Page
router.get('/', (req, res) => {
    res.render('signin', { error: null }); // Pass error as null initially
});

// Handle form submission (POST request)
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Example: Authentication logic (replace with actual logic, e.g., database check)
    if (email === 'test@example.com' && password === '12345') {
        // Save user info in session
        req.session.user = { name: 'John Doe', email }; // Replace with actual user data
        res.redirect('/'); // Redirect to homepage or dashboard
    } else {
        // Render signin page with an error message
        res.render('signin', { error: 'Invalid email or password. Please try again.' });
    }
});

module.exports = router;

