
import { Schema, model, SchemaTypes } from "mongoose";

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase: true,
        math: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "captura un correo válido"]
    },
    password:{
        type:String,
        required:true,
        minlength: 6
    },
    role: {
        type:String,
        enum: ['user', 'admin'],
        default:'user'
    },
    orders: [{ type: SchemaTypes.ObjectId, ref: "Orders" }],
})

export default model("Users", UserSchema);