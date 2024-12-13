const express = require('express');
const router = express.Router();

// Example programs data
const programs = [
    {
        title: 'Weight Loss Program',
        description: 'A comprehensive program to help you shed excess weight and achieve your goals.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Muscle Building Program',
        description: 'Tailored workouts to help you build muscle and gain strength.',
        image: 'https://via.placeholder.com/150',
    },
    {
        title: 'Yoga for Beginners',
        description: 'Learn the basics of yoga with our expert trainers.',
        image: 'https://via.placeholder.com/150',
    },
];

// Route to render the programs page
router.get('/', (req, res) => {
    res.render('my_programs', { programs });
});

module.exports = router;
