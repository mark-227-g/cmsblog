const BlogUser = require('./BlogUser');
const BlogPost = require('./BlogPost');
const BlogComment = require('./BlogComment');

BlogPost.hasMany(BlogComment, {
    foreignKey: 'blogid',
  });
  
  BlogComment.belongsTo(BlogPost, {
    foreignKey: 'blogid',
  });
  

module.exports = { BlogUser, BlogPost, BlogComment };
