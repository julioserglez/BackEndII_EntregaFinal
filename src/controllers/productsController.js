import { productsService } from "../services/index.js"
import productDTO from "../dto/productDto.js";

const getProducts = async(req,res)=> {
    try {
        const products = await productsService.getProducts();
        if(!products) return res.status(404).json({status:"error",error:"Producto(s) no encontrado(s)"})
                
        products
        ? res.status(200).json({status:"success", payload: products })
        : res.status(404).json({status:"Error", error:"No existen productos" });
    }catch (error){
        res.status(500).json({status:"error",error: error.message})
    }
}

const getProductById = async(req,res)=> {
    try {
        const productId = req.params.pid;
        const product = await productsService.getProductById(productId);
        if(!product) return res.status(404).json({status:"error",error:"Producto no encontrado"});

        product
        ? res.status(200).json({status:"success", payload: product })
        : res.status(404).json({status:"Error", error:"No existen productos" });
        
    }catch (error){
        res.status(500).json({status:"error",error: error.message})
    }
}

const createProduct = async(req,res)=> {
    try {
        const {code, name, price} = req.body;
        console.log(req.body);
        if(!code||!name||!price) return res.status(400).send({status:"error",error:"Valores Incompletos"})
        const product = productDTO.getInputFrom({code, name, price});
        const result = await productsService.create(product);
        res.status(201).json({status:"success",payload:result})
    }catch (error){
        res.status(500).json({status:"error",error: error.message})
    }
}

export default {
    createProduct,
    getProductById,
    getProducts
}
