const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

const router = require('express').Router();

const loginRoutes = require('./login.js');
const createAccountRoutes = require ('./createAccount.js');
const savedEventsRoutes = require('./event-routes.js');
const stellarEventpageRoutes = require('./stellarEventpageRoutes.js');

router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use(savedEventsRoutes);
router.use('/', stellarEventpageRoutes);

router.get('/', (req, res) => {
    res.redirect('/login');
  });

module.exports = router;