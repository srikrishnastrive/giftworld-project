const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Adjust the path as per your project structure

const Quote = sequelize.define('Quote', {
  Q_Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Q_About: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  Q_Qnty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Q_Price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Q_Price_Unit: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  PR_Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Prod_Requirements', // Adjust the model name as per your project structure
      key: 'PR_Id',
    },
  },
  User_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // Adjust the model name as per your project structure
      key: 'User_id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Quotes',
  timestamps: false,
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
});

module.exports = Quote;
