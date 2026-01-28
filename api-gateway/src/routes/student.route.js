import { Router } from 'express';
import proxyRequest from '../utils/proxy.js';
import { SERVICES } from '../config/services.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'GET',
      url: `${SERVICES.STUDENT_SERVICE}/api/v1/student`,
    });

    res.success('Students fetched via Gateway', data);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'POST',
      url: `${SERVICES.STUDENT_SERVICE}/api/v1/student`,
      data: req.body,
    });

    res.success('Student created via Gateway', data);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'GET',
      url: `${SERVICES.STUDENT_SERVICE}/api/v1/student/${req.params.id}`,
    });

    res.success('Student fetched via Gateway', data);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'PUT',
      url: `${SERVICES.STUDENT_SERVICE}/api/v1/student/${req.params.id}`,
      data: req.body,
    });

    res.success('Student updated via Gateway', data);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = await proxyRequest({
      method: 'DELETE',
      url: `${SERVICES.STUDENT_SERVICE}/api/v1/student/${req.params.id}`,
    });

    res.success('Student deleted via Gateway', data);
  } catch (err) {
    next(err);
  }
});

export default router;
