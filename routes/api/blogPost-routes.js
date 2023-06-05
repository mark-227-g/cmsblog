const router = require('express').Router();
const BlogPost = require('../../models/BlogPost');

// Get all posts
router.get('/', (req,res) => {
    BlogPost.findAll().then((postData) =>{
        res.json(postData)
    })
    }
)

router.put('/:id',(req,res) => {
    BlogPost.update(
        {
            title:req.body.title,
            content:req.body.content,
        }, // end fields
        {
            where:{
                id:req.params.id,
            }, 
        } // end where
    ) // end update

}); // end router

module.exports = router;