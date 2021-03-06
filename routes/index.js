 'use strict'

var Auth = require('./auth');
var Goals = require('./goals')

module.exports = function(app) {
    // SITE ROOT
    app.get('/', (req, res) => { // replace this route with a landing or home page
        // req.session.user? res.redirect('/dashboard') : res.redirect('/login');
        res.render('home');
    });

    // LOGIN
    app.get('/login', Auth.render); // route for the login page
    app.get('/logout', Auth.logout); // route for logging out

    app.post('/login', Auth.login); // form request emdpoint for loggin in
    app.post('/register', Auth.register); // form request endpoint for user registration

    // DAHSBOARD
    // app.all('/dashboard*', Auth.session); // protect all dashboard routes from unauthorized users
    app.get('/dashboard', (req, res) => { // renders the dashboard
        res.render('dashboard', req.session)
    });
    app.get('/dashboard/goals', Goals.get);
    app.post('/dashboard/goals', Goals.upsert);
}
