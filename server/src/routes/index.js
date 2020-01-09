import express from 'express';
import users from './users';

const router = express.Router();

router.use(express.json());

router.use('/user', users);

export default router;
