import StudentService from "./student.service.js";
import { statusCode } from '../../utils/constants/statusCode.js';

export default class StudentController {
  constructor() {
    this.studentService =  StudentService;
  }

  getAll = async (req, res, next) => {
    try {
       const students= await this.studentService.getAll();
       res.success("All students fetch successfully",students, statusCode.OK);
      
    } catch (err) {
      next(err);
    }
  };

  create = async(req, res, next)=> {
    try {
      const student= await this.studentService.create(req.body);
      res.success("Student created successfully", student, statusCode.CREATED);
      
    } catch (err) {
      next(err); 
    }
  };

  update = async(req, res, next)=>{
    try {
      const student= await this.studentService.update(req.params.id, req.body);
      if(!student) return res.fail("Student not found", statusCode.NOT_FOUND);
      
      res.success("Student updated successfully", student, statusCode.OK);
    } catch (err) {
      next(err);
    }
  };

  delete =  async(req, res, next)=>{
    try {
      const student= await this.studentService.delete(req.params.id);
      if(!student) return res.fail("Student not found");

      res.success("Student deleted successfully",student, statusCode.OK);
      
    } catch (err) {
      next(err);
    }
  };

  getById = async(req, res, next)=>{
    try {
      const student= await this.studentService.getById(req.params.id);
      if(!student) return res.fail("Student not found", statusCode.NOT_FOUND);
      
      res.success("Student fetched successfully",student, statusCode.OK);
      
    } catch (err) {
      next(err);
    }
  };
}
