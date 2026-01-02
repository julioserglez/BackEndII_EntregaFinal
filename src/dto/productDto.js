export default class ProductDTO {
    static getInputFrom = (product) =>{
        return {
            code: product.code,
            name: product.name,
            price: product.price
        }
    }
}