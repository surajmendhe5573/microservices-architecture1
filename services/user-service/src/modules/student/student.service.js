import { STUDENT_MODEL } from "./student.model.js"; 
 
 class StudentService {
   
  async getAll() {
    return await STUDENT_MODEL.find();
  }

  async create(data){
    return await STUDENT_MODEL.create(data);
  }

  async update(id, data){
    return await STUDENT_MODEL.findByIdAndUpdate(id, data, { new:true, runValidators:true });
  }

  async delete(id){
    return await STUDENT_MODEL.findByIdAndDelete(id);
  }

  async getById(id){
     return await STUDENT_MODEL.findById(id);
  }
}

export default new StudentService();
