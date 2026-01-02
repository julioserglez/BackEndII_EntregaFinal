import orderModel from '../models/orderModel.js';

export default class Orders {
    getOrders = async () => {
        try{
            let orders = await orderModel.find();
            console.log("orders", orders);
            return orders;

        }catch (error){
            console.log(error);
            return null
        }
    }
    
    getOrderById = async (oid) => {
        try{
            let order = await orderModel.findOne({_id:oid});
            return order;

        }catch (error){
            console.log(error);
            return null
        }
    }
   
    createOrder = async (order) => {
       try{
            let newOrder = await orderModel.create(order);
            return newOrder;

        }catch (error){
            console.log(error);
            return null
        }
    }

    updateOrder = async (id,doc) =>{
        try{
            let order = await orderModel.findByIdAndUpdate(id,{$set:doc});
            return order;

        }catch (error){
            console.log(error);
            return null
        }
    }
}