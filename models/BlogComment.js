const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//const StellarEvent = require('./blogPosts');

class BlogComment extends Model {}

BlogComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'BlogComment',
    //tableName: 'BlogComment', // Update the table name to match the actual table name
  }
);

module.exports = BlogComment;
