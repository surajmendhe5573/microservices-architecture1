import { HOTEL_MODEL } from "./hotel.model.js"; 
 class HotelService {
   
  async getAll() {
    return await HOTEL_MODEL.find();
  }

  async create(data){
    return await HOTEL_MODEL.create(data);
  }

  async getById(id){
    return await HOTEL_MODEL.findById(id);
  }
}

export default new HotelService();
