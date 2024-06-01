const {User,Event,ProdRequirements,Quote} = require('../models');

class GiftsRepository {
  async  getAllEvents() {
    try {
      const events = await Event.findAll();
      return events;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const user = await User.create(userData); 
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createProductRequirements(productData){
    try {
      const product = await ProdRequirements.create(productData);
      return product;
    }
    catch(error){
      throw error;
    }
  }

  async createQuote(quoteData){
    try{
      const quote = await Quote.create(quoteData);
      return quote;
    }
    catch(error){
      throw error;
    }
  }
  
  
}

module.exports = GiftsRepository;