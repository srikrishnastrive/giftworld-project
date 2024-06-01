class GiftsService {
    constructor(giftsRepository){
        this.giftsRepository = giftsRepository;
    }

    async getAllEvents(){
        try{
            return await this.giftsRepository.getAllEvents();
        }
        catch(error){
            throw error;
        }
    }

    async createUser(userData){
        return await this.giftsRepository.createUser(userData);
    }

    async createProductRequirements(productData){
        return await this.giftsRepository.createProductRequirements(productData);
    }

    async createQuote(quoteData){
        return await this.giftsRepository.createQuote(quoteData);
    }
}

module.exports = GiftsService;