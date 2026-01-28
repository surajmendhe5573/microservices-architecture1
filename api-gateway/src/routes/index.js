// src/routes/index.js
import { Router } from 'express';
import hotelRoutes from './hotel.route.js';
import studentRoutes from './student.route.js';

const router = Router();

router.use('/hotel', hotelRoutes);
router.use('/student', studentRoutes);

export default router;
