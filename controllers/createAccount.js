const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { sequelize } = require('../models/index');
const { Op, Sequelize } = require('sequelize');
const blogUser = require('../models/BlogUser');

// Route to render the create account page
router.get('/', (req, res) => {
  res.render('createaccount');
});

// Route to create a new account
router.post('/', (req, res) => {
  console.log('Request body:', req.body);
  const { username, password} = req.body;
  console.log(`Username: ${username},  Password: ${password}`);

  // Check if username and email are unique
  blogUser.findOne({ where: { [Op.or]: [{ username }] } })
    .then(user => {
      console.log(`User: ${JSON.stringify(user)}`);

      if (user) {
          console.log('Username already taken');
          res.send('<script>alert("Username already taken"); window.location="/create-account";</script>'); // show a browser alert and redirect to the create account page
        
      } else {
        // Create new user in the database
        console.log('Before blogUser.create');
        blogUser.create({ username,  password })
        .then((createdUser) => {
          console.log(`User created with ID: ${createdUser.id} and password: ${createdUser.password}`);
            res.redirect('/login'); // redirect to the login page
          })
          .catch(error => {
              console.error(error);
              res.status(500).json({ message: 'Internal server error' });
            }
            )}
    })
    .catch(error => {
      console.error(error);
      console.log(JSON.stringify(req.body));
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;

