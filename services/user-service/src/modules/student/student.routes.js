import { Router } from 'express';
import StudentController from './student.controller.js';
import validate from '../../middlewares/default/validate.js';
import { createStudentSchema, updateStudentSchema } from './student.validator.js';
// import rateLimiter from '../../middlewares/default/rateLimiter.js';

const router = Router();
const studentController = new StudentController();

router.get('/', studentController.getAll);
router.post('/',validate(createStudentSchema), studentController.create);
router.put('/:id',validate(updateStudentSchema), studentController.update);
router.delete('/:id', studentController.delete);
router.get('/:id', studentController.getById);

export default router;
