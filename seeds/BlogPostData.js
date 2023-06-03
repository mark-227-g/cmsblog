const { BlogPost } = require('../models');

const blogpostdata = [
    {title:'my first blog',
    content: 'this is the first blog of the project',
    user:"Mark"},
    {title:'my second blog',
    content: 'this is the second blog of the project',
    user:"Mark"},
    {title:'my third blog',
    content: 'this is the third blog of the project',
    user:"Mark"},
    {title:'my fourth blog',
    content: 'this is the fourth blog of the project',
    user:"Mark"},
    {title:'my fifth blog',
    content: 'this is the fifth blog of the project',
    user:"Mark"},
    {title:'my sixth blog',
    content: 'this is the sixth blog of the project',
    user:"Mark"}

]

const seedBlogPost = () => BlogPost.bulkCreate(blogpostdata);

module.exports = seedBlogPost;
