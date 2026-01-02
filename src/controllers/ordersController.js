import { usersService, productsService, businessService, ordersService } from "../services/index.js"
import businessDTO from "../dto/businessDto.js";
import productDTO from "../dto/productDto.js";
import orderDTO from "../dto/orderDto.js";
import { v4 as uuid } from "uuid";

const getOrders = async(req,res)=> {
    try {
        let orders = await ordersService.getOrders();
        if (!orders) return res.status(500).json({status:"error", error:'No existen ordenes'});
       
        orders
        ? res.status(200).json({status:"success", payload:orders })
        : res.status(404).json({status:"Error", error:"No existen ordenes" });
    }catch (error){
        res.send({status:"error",error: error.message})
    }
}

const getOrderById = async(req,res)=> {
    try {
        const {oid} = req.params;
        let order = await ordersService.getOrderById(oid);
        order
        ? res.status(200).json({status:"success", payload:order })
        : res.status(404).json({status:"Error", error:"No encontrada" });
    }catch (error){
        res.status(500).json({status:"error",error: error.message})
    }
}

const createOrder = async(req,res)=> {
    try {
        const {user, business, products} = req.body;
        if(!user||!business||products) return res.status(400).json({status:"error",error:"Valores Incompletos"})
        const userFound = await usersService.getUserById(user);
        const businessFound = await businessService.getBusinessById(business);
        const prods = await productsService.getProductsByIds(products);
        const total = prods.reduce((acc, p) => acc + p.price, 0);

        const newOrder = {
            number: uuid(),
            business: business, 
            user: user,
            status: "pending",
            products: prods.map((prod) => prod.id),
            totalPrice: total 
        };
        const order = orderDTO.getInputFrom(newOrder);
        const result = await ordersService.createOrder(order);
        res.status(201).json({status:"success",payload:result})
    }catch (error){
        res.status(500).json({status:"error",error: error.message})
    }
}

const resolveOrder = async(req,res)=> {
    try {
        res.status(200).json({status:"success",result: 'ResolveOrder'})
    }catch (error){
        res.status(500).json({status:"error",error: error.message})
    }
}

const addProduct = async(req,res)=> {
    try {
        res.status(200).json({status:"success",result: 'addProduct'})
    }catch (error){
        res.status(500).json({status:"error",error: error.message})
    }
}
export default {
    createOrder,
    getOrderById,
    getOrders,
    resolveOrder,
    addProduct
}
