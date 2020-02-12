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

    newUser = new User({ first_name: name, username, email, password, last_name: surname });

    const salt = bcrypt.genSaltSync(10);
    newUser.password = await bcrypt.hashSync(password, salt);

    const token = jwt.sign({ id: newUser._id }, appConfig.JWT_KEY, { expiresIn: '1d' });

    newUser.token = token;

    await newUser.save((err) => {
      if (err) {
        return res.status(500).send({ message: 'User wasn\'t save to data base' });
      }
    });

    await sendEmail(registrationMail, email, token, appConfig.BACKEND_DOMAIN);

    return res
        .header('access-token', token)
        .status(200)
        .send({
          user: { email, name, surname, username },
          message: 'The user is successfully registered.',
        });
  } catch (e) {
    return res.status(500).send('Something goes wrong. Please trying again later');
  }
};

const verifiedUser = async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ token });

    if (!user) {
      return res.status(500).send('Token doesn\'t exist');
    }

    const updatedUser = await User.findOneAndUpdate({ token }, {
      is_verified: true,
      token: '',
    });

    if (!updatedUser) {
      return res.status(500).send('User doesn\'t exist');
    }

    await updatedUser.save();

    res.redirect(`${appConfig.FRONT_DOMAIN}/login`);
  } catch (e) {
    return res.status(500).send('Something goes wrong. Please trying again later');
  }
};

export default { createUser, verifiedUser };
