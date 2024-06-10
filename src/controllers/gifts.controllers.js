const { StatusCodes } = require('http-status-codes');
const { GiftsService } = require('../services');
const { GiftsRepository } = require('../repostitories');
const path = require('path');

const giftsService = new GiftsService(new GiftsRepository());

async function getAllEvents(req, res, next) {
    try {
        const allEvents = await giftsService.getAllEvents();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Events retrieved successfully',
            error: {},
            data: allEvents
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const userData = req.body;
        const createdUser = await giftsService.createUser(userData);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'User created successfully',
            error: {},
            data: createdUser
        });
    } catch (error) {
        console.error('Error creating user:', error);
        next(error);
    }
}


async function createProductRequirements(req, res, next) {
  try {
    // Handle the file uploads
    const photo = req.files['photo'] ? req.files['photo'][0].filename : null;
    const video = req.files['video'] ? req.files['video'][0].filename : null;

    // Get other product data from the body
    const { Name, About, Qnty, price, Price_Unit, Delivery_location, User_id } = req.body;

    const productData = {
      Name,
      About,
      Qnty,
      photo: photo ? `/uploads/${photo}` : null,
      video: video ? `/uploads/${video}` : null,
      price,
      Price_Unit,
      Delivery_location,
      User_id
    };

    const createdProduct = await giftsService.createProductRequirements(productData);

    // Construct URLs for photo and video
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const photoUrl = photo ? `${baseUrl}/uploads/${photo}` : null;
    const videoUrl = video ? `${baseUrl}/uploads/${video}` : null;

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Product created successfully',
      error: {},
      data: {
        ...createdProduct.dataValues,
        photoUrl,
        videoUrl
      }
    });
  } catch (error) {
    console.error('Error creating product:', error);
    next(error);
  }
}

async function createProductRequirements(req, res, next) {
    try {
        // Check if photo file is included in the request
        if (!req.files || !req.files.photo) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: 'Photo file is required',
                error: {},
                data: null
            });
        }

        const productData = req.body;
        const photoFile = req.files.photo[0];
        productData.photo = photoFile.path;

        // Call the service function to create the product requirements
        const createdProduct = await giftsService.createProductRequirements(productData);

        const baseUrl = `${req.protocol}://${req.get('host')}`;
        const photoUrl = `${baseUrl}/uploads/${photoFile.filename}`;
        const videoUrl = createdProduct.video ? `${baseUrl}/uploads/${createdProduct.video}` : null;

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Product created successfully',
            error: {},
            data: {
                ...createdProduct.dataValues,
                photoUrl,
                videoUrl
            }
        });
    } catch (error) {
        console.error('Error creating product:', error);
        next(error);
    }
}


async function createQuoteForProduct(req, res, next) {
    try {
        const quoteData = req.body;
        const createdQuoteData = await giftsService.createQuote(quoteData);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Quote created successfully',
            error: {},
            data: createdQuoteData
        });
    } catch (error) {
        console.error('Error creating quote', error);
        next(error);
    }
}

async function getAllProducts(req, res, next) {
    try {
      const products = await giftsService.getAllProducts();
      return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Products fetched successfully',
        error: {},
        data: products
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      next(error);
    }
  }

module.exports = {
    getAllEvents,
    createUser,
    createProductRequirements,
    createQuoteForProduct,
    getAllProducts
};