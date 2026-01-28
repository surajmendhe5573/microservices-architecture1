import { Router } from 'express';
import HotelController from './hotel.controller.js';
// import validate from '../../middlewares/default/validate.js';
// import rateLimiter from '../../middlewares/default/rateLimiter.js';

const router = Router();
const hotelController = new HotelController();

router.get('/', hotelController.getAll);
router.post('/', hotelController.create);
router.get('/:id', hotelController.getById);

export default router;
