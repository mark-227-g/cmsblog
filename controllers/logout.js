const express = require('express');
const router = express.Router();
const blogUser = require('../models/BlogUser.js');


// Logout
router.get('/', (req, res) => {
  // When the user logs out, the session is destroyed
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      //res.status(204).end();
      res.redirect('/')
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;