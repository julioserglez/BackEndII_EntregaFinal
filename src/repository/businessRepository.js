export default class BusinessRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getBusiness = () =>{
        return this.dao.getBusiness();
    }
    getBusinessById = (bid) =>{
        return this.dao.getBusinessById({_id:bid})
    }
    createBusiness = (doc) =>{
        console.log('createBusiness:',doc)
        return this.dao.createBusiness(doc);
    }
}