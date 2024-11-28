app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.send('Error logging out.');
        } else {
            res.redirect('/'); // Redirect to the homepage
        }
    });
});
