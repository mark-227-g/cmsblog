const router = require('express').Router();
const BlogPost = require('../../models/BlogPost');

// Get all posts
router.get('/', (req,res) => {
    BlogPost.findAll().then((postData) =>{
        res.json(postData)
    })
    }
)

// get one post
router.get('/:id',(req,res) => {
    BlogPost.findByPk(req.params.id).then(postData => {
        res.json(postData)
    }
    ) // end .then
 }); // end router

// creaate post
router.post('/',(req,res) => {
    console.log('POST CREATE '+req.body);
    BlogPost.create(req.body)
    .then((newPost) => {
        res.json(newPost);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
// update post
router.delete('/:id',(req,res) => {
    BlogPost.destroy(
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