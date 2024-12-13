const express = require('express');
const router = express.Router();

// Trainers data (replace with actual database or API calls)
const trainers = [
    {
        name: 'John Doe',
        specialty: 'Strength Training',
        image: 'https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg',
    },
    {
        name: 'Jane Smith',
        specialty: 'Yoga Instructor',
        image: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg',
    },
    {
        name: 'Michael Lee',
        specialty: 'Cardio Coach',
        image: 'https://images.pexels.com/photos/8745176/pexels-photo-8745176.jpeg',
    },
];

// Route to render the trainers page
router.get('/', (req, res) => {
    res.render('trainers', { trainers }); // Pass trainers data to EJS template
});

module.exports = router;
