import { Router } from 'express';
import productsController from '../controllers/productsController.js';

const router = Router();
router.get('/',productsController.getProducts);
router.post('/', productsController.createProduct);
router.get('/:pid',productsController.getProductById);
export default router;