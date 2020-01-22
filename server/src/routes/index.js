import express from 'express';
import users from './users';
import sendEmail from '../helpers/sendEmail';
import { registrationMail } from '../emails/registration';

const router = new express.Router();

router.use(express.json());

router.use('/user', users);

router.post( '/sendEmail', (req) => {
  sendEmail(registrationMail, req.body.email);
});

export default router;
