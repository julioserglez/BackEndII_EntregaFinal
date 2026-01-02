export default class UserDTO {
    static getInputFrom = (user) =>{
        return {
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        }
    }
}