const router = require('express').Router();
const BlogComment = require('../../models/BlogComment');

// Get all posts
router.get('/', (req,res) => {
    BlogComment.findAll().then((commentData) =>{
        res.json(commentData)
    })
    }
)

// get one post
router.get('/:id',(req,res) => {
    BlogComment.findByPk(req.params.id).then(commentData => {
        res.json(commentData)
    }
    ) // end .then
 }); // end router

// creaate post
router.post('/',(req,res) => {
    BlogComment.create(req.body)
    .then((newComment) => {
        res.json(newComment);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
// update post
router.delete('/:id',(req,res) => {
    BlogComment.destroy(
        {
            where:{
                id:req.params.id,
            }, 
        } // end where
    ) // end delete
    .then((deletepost) => {
        res.json(deletepost)
    } // end .then arrow
    ) // end .then
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    } // end .catch arrow

    ) // end .catch

}); // end  delete router

// update post
router.put('/:id',(req,res) => {
    BlogComment.update(
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
    .then((updatepost) => {
        res.json(updatepost)
    } // end .then arrow

    ) // end .then
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    } // end .catch arrow

    ) // end .catch

}); // end  update router


module.exports = router;