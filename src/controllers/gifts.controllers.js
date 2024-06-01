const { StatusCodes } = require('http-status-codes');
const { GiftsService } = require('../services');
const { GiftsRepository } = require('../repostitories');

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
        const productData = req.body;
        const createdProduct = await giftsService.createProductRequirements(productData);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Product created successfully',
            error: {},
            data: createdProduct
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

module.exports = {
    getAllEvents,
    createUser,
    createProductRequirements,
    createQuoteForProduct
};