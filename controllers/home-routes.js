const router = require('express').Router();
const sequelize = require('../config/connection');
const { BlogPost } = require('../models');
const { BlogComment } = require('../models');


console.log(router)
router.get('/', async (req, res) => {
  console.log("get")
  try {
    /*
    const blogPostData = await BlogPost.findAll({
      
      attributes:{
        include:["id","title","content","user",
        "createdAt"
        /*
        sequelize.fn("DATE_FORMAT",sequelize.col("createdAt")
        ,"%m %d %Y"),"createdAt"
        */
     /* ] 
      },
      order: [['id', 'ASC']]
    });*/
    // Get all posts sorted by id
    
    const blogPostData = await BlogPost.findAll({
      
      attributes:{
        include:["id","title","content","user","createdAt"
      ] 
      },
      include:{
        model: BlogComment,
        required:false,
        attributes:[
          'comment',
          'user',
          'createdAt'
        ]
      },
      order: [['id', 'ASC']]
    });
  

    // Serialize eventpage data so templates can read it
    const blogPosts = blogPostData.map((project) => project.get({ plain: true }));
   // const blogPosts = JSON.stringify(blogPostsMap);
    //const commentArray = json.stringify(blogPosts.BlogComments)
   // const commentmap = commentArray.map((comment) => comment.get({plain:true})); 
console.log("results:");
//console.log(blogPosts);
blogPosts.forEach((post)=>{
  console.log(post)
  post.BlogComments.forEach((comm)=>{
    console.log(comm)
  })
})
console.log("json results:");
//console.log(blogPosts.Comments)
//console.log("json results:");
//console.log (JSON.stringify(blogPosts));
//console.log (commentmap)

    // Pass serialized data into Handlebars.js template
   // console.log(req.session.currentUserName);
  //  console.log("session variables: "+req.session)
    res.render('home', { blogPosts,
      currentUserName:req.session.currentUserName,
      loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
