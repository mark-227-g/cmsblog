const router = require('express').Router();
const sequelize = require('../config/connection');
const { BlogPost } = require('../models');


console.log(router)
router.get('/', async (req, res) => {
  console.log("get")
  try {
    /*
    const blogPostData = await sequelize.query(
      "select * from BlogPost join BlogComment on BlogPost.id = BlogComment.blogid"
      );*/
    
    // Get all events sorted by id
    const blogPostData = await BlogPost.findAll({
      attributes:{
        include:["id","title","content","user",
        sequelize.fn("DATE_FORMAT",
        "createdAt","%m %d %Y"),"createdAt"
      ] 
      },
      order: [['id', 'ASC']]
    });

    // Serialize eventpage data so templates can read it
    const blogPosts = blogPostData.map((project) => project.get({ plain: true }));
console.log("results:");
console.log (blogPosts);
    // Pass serialized data into Handlebars.js template
    res.render('home', { blogPosts, currentUserId: "Mark" });
  } catch (err) {
    res.status(500).json(err);
  }
});
/*
router.post('/event/addevent', async (req, res) => {
  const { stellarUserId, stellarEventId } = req.body;
  console.log(stellarUserId + '  ' + stellarEventId);
  const newdate = new Date();
  console.log(stellarUserId + ' : ' + stellarEventId);
  console.log(req.body);
  try {
    const [id, event, created_at, updated_at] = await StellarUserEvent.findOrCreate({
      where: {
        id: stellarUserId,
        event: stellarEventId,
        created_at: newdate,
        updated_at: newdate,
      },
      defaults: {},
    });

    res.json({ success: true });
  } catch (err) {
    console.log('error ' + err);
    res.status(500).json('500 error ' + err);
  }
});

router.post('/event/save', async (req, res) => {
  const { user_id, event_id } = req.body;
  console.log('user_id:', user_id);
  console.log('event_id:', event_id);
  const newDate = new Date();
  try {
    const savedEvent = await SavedEvent.create({
      user_id: req.session.currentUserId,
      event_id,
      created_at: newDate,
      updated_at: newDate,
    });
    console.log('savedEvent:', savedEvent);
    res.json(savedEvent);
  } catch (err) {
    console.log('Error saving event:', err);
    res.status(500).json('500 error ' + err);
  }
});
*/
module.exports = router;
