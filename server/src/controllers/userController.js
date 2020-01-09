import User from "../models/User";

const createUser = async(req, res) => {
  const { body: user } = req;

  if(!user.email || !user.password) {
    return res.status(422).send('Please, fill in required fields.');
  }

  const finalUser = new User(user);

  await finalUser.save();

  return res.status(200).send('The user is successfully registered.');
};

export default { createUser };
