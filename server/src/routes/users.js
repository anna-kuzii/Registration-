import express from 'express';
import UserController from '../controllers/userController';

const router = new express.Router();

router.post('/register', UserController.createUser);
router.get('/:token', UserController.verifiedUser);

export default router;
