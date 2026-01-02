export default class BusinessDTO {
    static getInputFrom = (business) =>{
        return {
            name: business.name,
            products: business.products
        }
    }
}