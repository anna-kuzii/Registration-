import bcrypt from 'bcryptjs';
import User from '../models/User';

export const saveUser = async (name, surname, email, password, username) => {
  const user = await User.findOne({
    $or: [{ 'email': email }, { 'username': username }],
  });

  if (user) {
    if (email === user.email) {
      throw new Error('User with this email is already exist!');
    } else if (username === user.username) {
      throw new Error('User with this username is already exist!');
    }
  }

  return new User({ first_name: name, username, email, password, last_name: surname });
};

export const updateUser = async (id) => {
  const updatedUser = await User.findOneAndUpdate({ _id: id }, {
    is_verified: true,
  });
  if (updatedUser) {
    return updatedUser;
  } else {
    throw new Error('User doesn\'t exist');
  }
};

export const encryptPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10);

  return await bcrypt.hashSync(password, salt);
};


