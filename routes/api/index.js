const router = require('express').Router();
const BlogPost = require('./blogPost-routes');

router.use('/blogpost',BlogPost);

module.exports = router;