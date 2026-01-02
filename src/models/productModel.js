import { Schema, model, SchemaTypes } from "mongoose";

const ProductSchema = new Schema({
   code:{
        type:Number,
        required:true,
        unique:true
    },  
    name: {
        type:String,
        required:true
    },  
    price: {
        type:Number,
        required:true
    }
});

export default model("Products", ProductSchema);