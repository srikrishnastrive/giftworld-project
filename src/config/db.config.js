

const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'giftsworld',
});

const sequelize = new Sequelize('giftsworld', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectModule: mysql,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
  
  module.exports = sequelize;