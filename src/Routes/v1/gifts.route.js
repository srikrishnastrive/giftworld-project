const express = require('express');
const path = require('path');

const {giftsControllers} = require('../../controllers');
const giftsRouters = express.Router();

const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'src/uploads/');
  },
  filename: function(req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });




giftsRouters.get('/allEvents', giftsControllers.getAllEvents);
giftsRouters.post('/createUser', giftsControllers.createUser);
giftsRouters.post('/createProduct', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'video', maxCount: 1 }]), giftsControllers.createProductRequirements);
giftsRouters.post('/createQuote', giftsControllers.createQuoteForProduct);
giftsRouters.get('/allProducts', giftsControllers.getAllProducts);



module.exports = giftsRouters;
