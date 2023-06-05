const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

const router = require('express').Router();

//const loginRoutes = require('./login.js');
//const createAccountRoutes = require ('./createAccount.js');
const homeRoutes = require('./home-routes.js');
//const dashboardRoutes = require('./dashboard-routes.js');
//const commentRoutes = require('./comment-routes.js');

//router.use('/create-account', createAccountRoutes);
//router.use('/login', loginRoutes);
router.use('/',homeRoutes);
//router.use('/dashboard',dashboardRoutes);
//router.use('/comment', commentRoutes);

/*
router.get('/', (req, res) => {
    res.redirect('/login');
  });
*/
module.exports = router;