import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model('User', schema);
export default User;
