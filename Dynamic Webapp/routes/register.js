const express = require('express');
const router = express.Router();

// Render the Register Page
router.get('/', (req, res) => {
    res.render('register', { error: null }); // Pass error initially as null
});

// Handle form submission (POST request)
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // Example: Save the user to the database (implement actual logic)
    if (email && password && name) {
        console.log('New User:', { name, email, password });
        res.redirect('/signin'); // Redirect to Sign-In page upon successful registration
    } else {
        res.render('register', { error: 'All fields are required. Please fill out the form correctly.' });
    }
});

module.exports = router;
