import productModel from '../models/productModel.js';

export default class Products {
    getProducts = async () => {
        try{
            let products = await productModel.find();
            console.log("products", products);
            return products;

        }catch (error){
            console.log(error);
            return null
        }
    }

    getProductById = async (pid) => {
        try{
            let product = await productModel.findOne({_id:pid});
            return product;

        }catch (error){
            console.log(error);
            return null
        }
    }

    getProductsByIds = async (ids) => {
        try{
            let products = await productModel.find({ _id: {$in: ids}});
            return products;

        }catch (error){
            console.log(error);
            return null
        }
    }
}