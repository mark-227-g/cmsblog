const { BlogComment } = require('../models');

const blogcommentdata = [
    {blogid:1,comment: 'this is the first comment',
    user:"Mark"},
    {blogid:1,comment: 'this is the two comment',
    user:"Mark"},    
    {blogid:2,comment: 'this is the three comment',
    user:"Mark"},   
     {blogid:4,comment: 'this is the four comment',
    user:"Mark"},
]

const seedBlogComment = () => BlogComment.bulkCreate(blogcommentdata);

module.exports = seedBlogComment;