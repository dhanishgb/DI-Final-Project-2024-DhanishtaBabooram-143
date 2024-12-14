app.get('/dashboard', isAuthenticated, (req, res) => {
    if (req.session.user){
        const user = req.session.user; // Retrieve user data from session
    res.render('dashboard', { user }); // Pass user data to the template
    }else{
        res.redirect("/signin")
    }
    
});
