export default class orderRepository {
    constructor(dao) {
        this.dao = dao;
    }
    getOrders = () =>{
        return this.dao.getOrders();
    }
    getOrderById = (oid) =>{
        return this.dao.getOrderById({_id:oid})
    }
    createOrder = (doc) =>{
        console.log('createOrder:',doc)
        return this.dao.createOrder(doc);
    }
}