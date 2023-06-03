const sequelize = require('../config/connection');
const seedBlogPost = require('./BlogPostData');
const seedBlogComment = require('./BlogCommentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPost();

  await seedBlogComment();

  process.exit(0);
};

seedAll();
