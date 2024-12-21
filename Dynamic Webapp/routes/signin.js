const express = require('express');
const router = express.Router();

// Render the Sign-in Page
router.get('/', (req, res) => {
    res.render('signin', { error: null }); // Pass error as null initially
});

// Handle form submission (POST request)
router.post('/', async (req, res) => {
    try {
        // Log the data coming from the front-end
        console.log("Incoming data:", req.body);

        const response = await fetch("http://localhost:3000/api/users/signin", {
            method: "POST",
            body: JSON.stringify({
                email: req.body.email,
                password: req.body.password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const data = await response.json();

        // Log the response from the API
        console.log("API response:", data);

        if (response.ok && data.message === "Signin successful") {
            req.session.user = data.user;
            res.redirect('/dashboard');
        } else {
            res.render('signin', { error: data.message || "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error during signin:", error);
        res.render('signin', { error: "Server error, please try again later" });
    }
});

module.exports = router;
