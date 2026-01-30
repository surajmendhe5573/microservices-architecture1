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

  async update(id, data){
    return await HOTEL_MODEL.findByIdAndUpdate(id, data, { new:true, runValidators:true });
  }

  async delete(id){
    return await HOTEL_MODEL.findByIdAndDelete(id);
  }
}

export default new HotelService();
