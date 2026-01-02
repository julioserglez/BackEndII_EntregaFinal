import { businessService } from "../services/index.js"
import businessDTO from "../dto/businessDto.js";

///Llama las funciones del repositorio [businessRepository] a traves del businessService
const getBusiness = async(req,res)=> {
    try {
        let business = await businessService.getBusiness();
        if (!business) return res.status(500).json({status:"error", error:''});
       
        business
        ? res.status(200).json({status:"success", payload:business })
        : res.status(404).json({status:"Error", error:"No Encontrado" });

    }catch (error){
         res.status(500).json({status:"error", error: error.message });
    }
}

const getBusinessById = async(req,res)=> {
    try {
        const {bid} = req.params;
        let business = await businessService.getBusinessById(bid);
        if(!business) return res.status(404).json({status:"error", error:"Business no encontrado"})
        business
        ? res.status(200).json({status:"success", payload:business })
        : res.status(404).json({status:"Error", error:"No encontrado" });
    }catch (error){
        res.status(500).json({status:"error", error: error.message});
    }
}

const createBusiness = async(req,res)=> {
    try {
        const {name, products} = req.body;
        if(!name) return res.status(400).send({status:"error",error:"Valores Incompletos"})
        const business = businessDTO.getInputFrom({ name, products});
        const result = await businessService.createBusiness(business);
        res.status(201).json({status:"success",payload:result})
    }catch (error){
        res.status(500).json({status:"error",error: error.message});
    }
}

export default {
    createBusiness,
    getBusinessById,
    getBusiness
}

