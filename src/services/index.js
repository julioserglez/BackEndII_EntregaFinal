import Users from "../dao/usersDao.js";
import Orders from "../dao/ordersDao.js";
import Products from "../dao/productsDao.js";
import Business from "../dao/businessDao.js";

import OrderRepository from "../repository/orderRepository.js";
import ProductRepository from "../repository/productRepository.js";
import BusinessRepository from "../repository/businessRepository.js";
import UsersRepository from "../repository/userRepository.js";

export const ordersService = new OrderRepository(new Orders());
export const productsService = new ProductRepository(new Products());
export const businessService = new BusinessRepository(new Business());
export const usersService = new UsersRepository(new Users());
