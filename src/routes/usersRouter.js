import { Router } from 'express';
import usersController from '../controllers/usersController.js';

const router = Router();
router.get('/',usersController.getUsers);
router.get('/:uid',usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:uid',usersController.updateUser);
export default router;