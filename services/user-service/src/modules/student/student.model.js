import mongoose from 'mongoose';

const studentSchema= new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true},
    city: { type: String},
    gender: { type: String, enum: ["Male", "Female", "Other"], default: "Male"},

}, {timestamps: true});

export const STUDENT_MODEL= mongoose.model('student', studentSchema);