import mongoose from "mongoose";

const hotelSchema= new mongoose.Schema({
    hotelName: { type: String, required: true },
    address: { type: String}

}, {timestamps:true});

export const HOTEL_MODEL= mongoose.model("hotel", hotelSchema);