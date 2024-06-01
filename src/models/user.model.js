const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); 

const User = sequelize.define('User', {
  User_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  usertype: {
    type: DataTypes.ENUM('buyer', 'seller'),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  isActive: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  photo: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  Event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'events', 
      key: 'id',
    },
  },
  Source: {
    type: DataTypes.ENUM('buyer', 'seller'),
    allowNull: false,
  },
  bio: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
});

console.log(User === sequelize.models.User); // true

module.exports = User;