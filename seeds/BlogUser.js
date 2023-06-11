const { BlogUser } = require('../models');

const bloguserdata= [{
username:'testuser', 
name:'test user name',
password:'$2a$10$IXy5tkJ4F1w183I0MU40uuSTfApflDk1yaY1y/0Au1ja7mjSVJP1C'
}]


const seedBlogUser = () => BlogUser.bulkCreate(bloguserdata);

module.exports = seedBlogUser;
