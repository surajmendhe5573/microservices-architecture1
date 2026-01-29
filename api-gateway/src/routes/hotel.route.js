import { Router } from 'express';
import proxyRequest from '../utils/proxy.js';
import { SERVICES } from '../config/services.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'GET',
      url: `${SERVICES.HOTEL_SERVICE}/api/v1/hotel`,
    });

    res.success('Hotels fetched via Gateway', data);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'POST',
      url: `${SERVICES.HOTEL_SERVICE}/api/v1/hotel`,
      data: req.body,
    });

    res.success('Hotel created via Gateway', data);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'GET',
      url: `${SERVICES.HOTEL_SERVICE}/api/v1/hotel/${req.params.id}`,
    });

    res.success('Hotel fetched via Gateway', data);
  } catch (err) {
    next(err);
  }
});

export default router;
