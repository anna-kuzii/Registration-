import jwt from 'jsonwebtoken';

export const encodeJWT = (id, secret, expTime) => {
  return jwt.sign({ id }, secret, { expiresIn: `${expTime}h` });
};

export const decodeJWT = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    throw new Error('Token is not valid or has expired');
  }
};
