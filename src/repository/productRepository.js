export default class ProductRepository {
    constructor(dao){
        this.dao = dao;
    }
    getProducts = () =>{
        return this.dao.getProducts();
    }
    getProductsByIds = (ids) =>{
        return this.dao.getProductsByIds(ids);
    }

    getProductByCode = (code) =>{
        return this.getBy({code});
    }
    getProductById = (id) =>{
        return this.dao.getProductById({_id:id})
    }
}