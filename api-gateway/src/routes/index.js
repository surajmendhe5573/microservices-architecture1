// src/routes/index.js
import { Router } from 'express';
import hotelRoutes from './hotel.route.js';

const router = Router();

router.use('/hotel', hotelRoutes);

export default router;
