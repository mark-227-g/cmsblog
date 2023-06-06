const router = require('express').Router();
const BlogPost = require('./blogPost-routes');
const BlogComment = require('./blogComment-routes');

router.use('/blogpost',BlogPost);
router.use('/blogcomment',BlogComment);

module.exports = router;