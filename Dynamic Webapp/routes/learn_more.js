const express = require('express');
const router = express.Router();

// Render the Learn More page
router.get('/', (req, res) => {
    res.render('learn_more'); // Renders learn_more.ejs
});

module.exports = router;
