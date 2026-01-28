import HotelService from "./hotel.service.js";
import { statusCode } from '../../utils/constants/statusCode.js';

export default class HotelController {
  constructor() {
    this.hotelService =  HotelService;
  }

  getAll = async (req, res, next) => {
    try {
        const hotels= await this.hotelService.getAll();
        res.success("Hotels fetched successfully",hotels, statusCode.OK);
      
    } catch (err) {
      next(err);
    }
  };

  create = async(req, res, next)=>{
    try {
      const hotel= await this.hotelService.create(req.body);
      res.success("Hotel created successfully", hotel, statusCode.CREATED);
      
    } catch (err) {
      next(err);
    }
  };

  getById = async(req, res, next)=>{
    try {
      const hotel= await this.hotelService.getById(req.params.id);
      if(!hotel) return res.fail("Hotel not found", statusCode.NOT_FOUND);
      
      res.success("Hotel fetched successfully", hotel, statusCode.OK);
      
    } catch (err) {
      next(err);
    }
  };
}
