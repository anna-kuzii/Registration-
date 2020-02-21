import sendEmail from '../helpers/sendEmail';
import { registrationMail } from '../emails/registration';
import appConfig from '../configs/app.config';
import { encodeJWT, decodeJWT } from '../db/query/tokenQuery';
import { updateUser, saveUser, encryptPassword } from '../db/query/userQuery';

const createUser = async (req, res) => {
  try {
    const { body: { name, surname, email, password, username }} = req;

    if (!email || !password || !username) {
      throw new Error('Please, fill in required fields.');
    }

    const newUser = await saveUser(name, surname, email, password, username);

    newUser.password = await encryptPassword(password);

    const token = encodeJWT(newUser._id, appConfig.JWT_KEY, appConfig.TOKEN_TIME);

    await newUser.save((err) => {
      if (err) {
        throw new Error('User wasn\'t save to data base');
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
    return res.status(500).send({ message: e.message });
  }
};

const verifiedUser = async (req, res) => {
  try {
    const token = req.params.token;

    const verifiedToken = decodeJWT(token, appConfig.JWT_KEY);

    await updateUser(verifiedToken.id);

    res.redirect(`${appConfig.FRONT_DOMAIN}/login`);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};

export default { createUser, verifiedUser };
