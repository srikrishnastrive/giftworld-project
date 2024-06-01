const express = require('express');
const giftsRouters = require('./gifts.route')

const v1Router = express.Router();




v1Router.use('/gifts', giftsRouters);

module.exports = v1Router;
