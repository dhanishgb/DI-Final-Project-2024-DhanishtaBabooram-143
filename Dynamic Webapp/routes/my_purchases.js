const express = require('express');
const router = express.Router();

// Route to render My Purchases page
router.get('/', (req, res) => {
    const user = req.session?.user || null; // Retrieve user data from session
    res.render('my_purchases', { user }); // Render my_purchases.ejs and pass user data
});

module.exports = router;
