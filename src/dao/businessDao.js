import businessModel from '../models/businessModel.js';


export default class Business {
    getBusiness = async () => {
        try{
            let business = await businessModel.find();
            console.log("business", business);
            return business;

        }catch (error){
            console.log(error);
            return null
        }
    }
    getBusinessById = async (bid) => {
        try{
            let business = await businessModel.findOne({_id:bid});
            return business;

        }catch (error){
            console.log(error);
            return null
        }
    }

    createBusiness = async (business) => {
        try{
            let newBusiness = await businessModel.create(business);
            return newBusiness;

        }catch (error){
            console.log(error);
            return null
        }
    }

    updateBusiness = async (id,doc) =>{
        try{
            let business = await businessModel.findByIdAndUpdate(id,{$set:doc});
            return business;

        }catch (error){
            console.log(error);
            return null
        }
    }
}