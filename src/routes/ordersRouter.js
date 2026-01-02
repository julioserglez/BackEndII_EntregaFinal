import { Router } from 'express';
import ordersContoller from '../controllers/ordersController.js';

const router = Router();
router.get('/',ordersContoller.getOrders);
router.get('/:oid',ordersContoller.getOrderById);
router.post('/', ordersContoller.createOrder);
export default router;