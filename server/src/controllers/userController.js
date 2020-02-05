import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../db/models/User';
import sendEmail from '../helpers/sendEmail';
import { registrationMail } from '../emails/registration';
import appConfig from '../configs/app.config';

const createUser = async (req, res) => {
  try {
    const { body: { name, surname, email, password, username }} = req;

    if (!email && !password && !username) {
      return res.status(422).send('Please, fill in required fields.');
    }

    let newUser = await User.findOne({
      $or: [{ 'email': email }, { 'username': username }],
    });

    if (newUser) {
      if (email === newUser.email) {
        return res.status(422).send({ message: 'User with this email is already exist!' });
      } else if (username === newUser.username) {
        return res.status(422).send({ message: 'User with this username is already exist!' });
      }
    }

    newUser = new User({ name, username, email, password, surname });

    const salt = bcrypt.genSaltSync(10);
    newUser.password = await bcrypt.hashSync(password, salt);

    await newUser.save((err) => {
      if (err) {
        // TODO change error
        return res.status(500).send('Error');
      }

      sendEmail(registrationMail, email);
    });

    const token = jwt.sign({ id: newUser._id }, appConfig.JWT_KEY, { expiresIn: '7d' });

    return res
        .header('access-token', token)
        .status(200)
        .send({
          user: { email, name, surname, username },
          message: 'The user is successfully registered.',
        });
  } catch (e) {
    return res.status(500).send(e);
  }
};

export default { createUser };
