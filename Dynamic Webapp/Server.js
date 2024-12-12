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

// Start the Server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
