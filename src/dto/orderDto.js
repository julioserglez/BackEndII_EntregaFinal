export default class OrderDTO {
    static getInputFrom = (order) =>{
        return {
            number: order.number,
            business: order.business,
            user: order.user,
            status: order.status,
            products: order.products,
            totalPrice: order.totalPrice
        }
    }
}
