const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class BlogUser extends Model {}

BlogUser.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      len: [3, 50]
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: [3, 50]
    }
  },
  zipcode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: [5, 10]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: [8, 60]
    }
  }
}, {
  sequelize,
  modelName: 'BlogUser',
  freezeTableName: true,
  timestamps: false
});

BlogUser.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

module.exports = BlogUser;
