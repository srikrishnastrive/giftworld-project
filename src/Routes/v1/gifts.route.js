const express = require('express');

const {giftsControllers} = require('../../controllers');
const giftsRouters = express.Router();





giftsRouters.get('/allEvents', giftsControllers.getAllEvents);
giftsRouters.post('/createUser', giftsControllers.createUser);
giftsRouters.post('/createProduct', giftsControllers.createProductRequirements);
giftsRouters.post('/createQuote', giftsControllers.createQuoteForProduct);


module.exports = giftsRouters;
