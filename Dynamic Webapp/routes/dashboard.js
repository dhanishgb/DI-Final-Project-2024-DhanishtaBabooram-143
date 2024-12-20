app.get('/dashboard', isAuthenticated, (req, res) => {
    if (req.session.user){
        const user = req.session.user; // Retrieve user data from session
    res.render('dashboard', { user }); // Pass user data to the template
    }else{
        res.redirect("/signin")
    }
    
});

const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    // Simulate logged-in user name (replace with actual session or database value)
    const userName = req.session?.user?.name || "Guest"; // Replace with actual session management
    res.render('dashboard', { userName });
});

module.exports = router;

