export default class UsersRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getUsers = () =>{
        return this.dao.getUsers();
    }
    createUser = (doc) =>{
        console.log('createUser:',doc)
        return this.dao.createUser(doc);
    }
    updateUser = (id,doc) =>{
        return this.dao.updateUser(id,doc);
    }
    getUserByEmail = (email) =>{
        return this.getBy({email});
    }
    getUserById = (id) =>{
        return this.dao.getUserById({_id:id})
    }
}