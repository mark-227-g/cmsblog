const router = require('express').Router();
const sequelize = require('../config/connection');
const { BlogPost } = require('../models');
const { BlogComment } = require('../models');


console.log(router)
router.get('/', async (req, res) => {
  console.log("get")
  try {
    
    // Get all posts sorted by id
    const blogPostData = await BlogPost.findAll({
      
      attributes:{
        include:["id","title","content","user",
        sequelize.fn("DATE_FORMAT",
        "createdAt","%m %d %Y"),"createdAt"
      ] 
      },
      include:[{
        model: BlogComment,
        required:true,
        attributes:{include:[
          'comment',
          'user',
          sequelize.fn("DATE_FORMAT",
        "createdAt","%m %d %Y"),"createdAt"
        ]}
      }],
      order: [['id', 'ASC']]
    });

    // Serialize eventpage data so templates can read it
    const blogPosts = blogPostData.map((project) => project.get({ plain: true }));
console.log("results:");
console.log (blogPosts);
console.log("result comment")
const blogComment = blogPostData.BlogComment.map((project) => project.get({ plain: true }));
console.log(blogPosts.blogComment);

    // Pass serialized data into Handlebars.js template
    res.render('home', { blogPosts, currentUserName });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
