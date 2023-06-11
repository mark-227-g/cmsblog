const sequelize = require('../config/connection');
const seedBlogPost = require('./BlogPostData');
const seedBlogComment = require('./BlogCommentData');
const seedBlogUser = require('./BlogUser');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPost();

  await seedBlogComment();

  await seedBlogUser()

  process.exit(0);
};

seedAll();
