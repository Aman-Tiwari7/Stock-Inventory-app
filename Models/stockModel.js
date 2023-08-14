import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    Item:{
        type:String,
        required:true,
        unique:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Packaging:String,
    Unit:String,
});

const Stock = mongoose.model('Stock',stockSchema);

export default Stock;