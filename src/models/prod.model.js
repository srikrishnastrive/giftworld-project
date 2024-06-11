const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Adjust the path as per your project structure

const ProdRequirement = sequelize.define('ProdRequirement', {
  PR_Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  About: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  Qnty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  video: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Price_Unit: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  Delivery_location: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  User_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', 
      key: 'User_id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Prod_Requirements',
  timestamps: false,
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
});

module.exports = ProdRequirement;
