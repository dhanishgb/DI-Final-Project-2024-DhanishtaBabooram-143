const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

// Import routes
const signinRoutes = require('./routes/signin');
const registerRoutes = require('./routes/register');

const app = express();

// Session Middleware
app.use(
    session({
        secret: 'yourSecretKey', // Replace with a secure secret in production
        resave: false,
        saveUninitialized: false,
    })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Set the View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to check if user is signed in
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        next(); // Proceed if the user is authenticated
    } else {
        res.redirect('/signin'); // Redirect to sign-in page if not authenticated
    }
};

// Use Routes
app.use('/register', registerRoutes); // Register routes
app.use('/signin', signinRoutes);     // Signin routes

// Homepage Route (Public)
app.get('/', (req, res) => {
    const user = req.session.user || null; // Get user from session, if available
    res.render('homepage', { user });     // Pass user data to EJS template
});

// Dashboard or Authenticated Homepage (Private)
app.get('/dashboard', isAuthenticated, (req, res) => {
    const user = req.session.user; // Retrieve user data from session
    res.render('dashboard', { user });   // Render the authenticated homepage
});

// Route for logout
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Could not log out', error: err });
        }
        // Redirect to the homepage after logging out
        res.redirect('/');
    });
});

const aboutRoutes = require('./routes/about'); // Ensure the correct path to the 'about.js' file
app.use('/about', aboutRoutes);

const learnMoreRoutes = require('./routes/learn_more');
app.use('/learn_more', learnMoreRoutes); // Register the Learn More route

// Route for My Purchases
app.get('/my_purchases', (req, res) => {
    const user = req.session.user || null; // Get user from session
    res.render('my_purchases', { user }); // Render the my_purchases page with user data
});

const trainersRoutes = require('./routes/trainers'); // Import Trainers route
app.use('/trainers', trainersRoutes); // Register trainers route

// Routes
const programsRoutes = require('./routes/my_programs'); // Import my_programs route
app.use('/my_programs', programsRoutes); // Register my_programs route

// Start the Server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
