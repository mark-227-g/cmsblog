const router = require('express').Router();
const BlogPost = require('../../models/BlogPost');

// Get all posts
router.get('/', (req,res) => {
    BlogPost.findAll().then((postData) =>{
        res.json(bookData)
    })
    }
)

module.exports = router;