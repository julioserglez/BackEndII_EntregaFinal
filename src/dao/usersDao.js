import userModel from '../models/userModel.js';

export default class Users {
    getUsers = async () => {
        try{
            let user = await userModel.find();
            return user;

        }catch (error){
            console.log(error);
            return null
        }
    }

    getUserById = async (id) => {
        try{
            let user = await userModel.findOne({_id:id});
            return user;

        }catch (error){
            console.log(error);
            return null
        }
    }

    createUser = async (user) => {
        try{
            let newUser = await userModel.create(user);
            return newUser;

        }catch (error){
            console.log(error);
            return null
        }
    }
    
    updateUser = async (id,user) => {
        try{
            let updtaeUser = await userModel.updateOne( {_id:id}, {$set:user});
            return updtaeUser;

        }catch (error){
            console.log(error);
            return null
        }
    }
}