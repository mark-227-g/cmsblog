const router = require('express').Router();
const sequelize = require('../config/connection');
const { BlogUser } = require('../models');


console.log(router)
router.get('/', async (req, res) => {
  console.log("get")
  try {
    // Get all posts sorted by id
    const blogUserData = await BlogUser.findAll({
      attributes:{
        include:["name","title","content","user",
        sequelize.fn("DATE_FORMAT",
        "createdAt","%m %d %Y"),"createdAt"
      ] 
      },
      order: [['id', 'ASC']]
    });

    // Serialize eventpage data so templates can read it
    const blogUser = blogPostData.map((project) => project.get({ plain: true }));
console.log("results:");
console.log (blogUser);
    // Pass serialized data into Handlebars.js template
    console.log("session variables: "+req.session)
    res.render('home', { blogUser, currentUserName });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
