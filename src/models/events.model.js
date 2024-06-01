const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config'); // Adjust the path as per your project structure

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  event_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  event_date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'events',
  timestamps: false,
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
});

console.log(Event === sequelize.models.Event); // true

module.exports = Event;
