const express = require('express');
const router = express.Router();

// Render the Sign-in Page
router.get('/', (req, res) => {
    res.render('signin', { error: null }); // Pass error as null initially
});

// Handle form submission (POST request)
router.post('/', async (req, res) => {
    // console.log(req.body);

    const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            username: req.body.username,
            password: req.body.password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

    const data = await response.json(); // parse JSON
    console.log(data);

    if (data['message']=="Login successful"){
        // res.send('Login succesful');
        req.session.user=data.user;

        res.redirect('/dashboard');
    }else{
        res.send('Login unsuccesful');
    }



});

module.exports = router;

