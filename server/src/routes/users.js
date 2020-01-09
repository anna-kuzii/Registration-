import express from 'express';
import UserController from '../controllers/userController';

const router = new express.Router();

router.post('/register', UserController.createUser);

export default router;
