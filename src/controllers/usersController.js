import { usersService } from "../services/index.js"
import userDTO from "../dto/userDto.js";

///Llama las funciones del repositorio [userRepository] a traves del userService
const getUsers = async(req,res)=>{
    try {
        const users = await usersService.getUsers();
        users
        ? res.status(200).json({status:"success", payload:users })
        : res.status(404).json({status:"Error", error:"Not foud" });
    }catch (error){
        res.status(500).json({status:"error", error: error.message });
    }
}

const getUserById = async(req,res)=> {
    try {
        const userId = req.params.uid;
        const user = await usersService.getUserById(userId);
        if(!user) return res.status(404).json({status:"error",error:"User not found"})
        res.status(200).json({status:"success",payload:user})
    }catch (error){
        //res.send({status:"error",error: error.message})
        res.status(500).json({status:"error", error: error.message });
    }
}

const createUser = async(req,res)=> {
    try {
        const {name,email, password, role} = req.body;
        console.log(req.body);
        if(!name||!email) return res.status(400).json({status:"error",error:"Incomplete values"})
        const user = userDTO.getInputFrom({name,email, password, role});
        const result = await usersService.createUser(user);
        res.status(201).json({status:"success",payload:result})
    }catch (error){
        res.status(500).json({status:"error", error: error.message });
    }    
}

const updateUser =async(req,res)=>{
    try {
        const updateBody = req.body;
        const userId = req.params.uid;
        const user = await usersService.getUserById(userId);
        if(!user) return res.status(404).json({status:"error", error:"User not found"})
        const result = await usersService.updateUser(userId,updateBody);
        res.status(200).json({status:"success",message:"User updated"})
    }catch (error){
        res.status(500).json({status:"error", error: error.message });
    }     
}

export default {
    createUser,
    getUsers,
    getUserById,
    updateUser
}