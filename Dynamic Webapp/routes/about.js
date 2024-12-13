const express = require('express');
const router = express.Router();

// Handle GET /about
router.get('/', (req, res) => {
    const user = req.session?.user || null; // Fetch user from session, if available
    res.render('about', { user }); // Render about.ejs with user data
});

module.exports = router;
