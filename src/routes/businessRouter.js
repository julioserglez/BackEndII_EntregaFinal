import { Router } from 'express';
import businessController from '../controllers/businessController.js';

const router = Router();
router.get('/',businessController.getBusiness);
router.post('/', businessController.createBusiness);
router.get('/:bid',businessController.getBusinessById);
export default router;