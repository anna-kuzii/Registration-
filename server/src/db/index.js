import mongoose from 'mongoose';
import appConfig from '../configs/app.config';

export const connect = async () => {
  try {
    await mongoose.connect(appConfig.DATABASE_URL, { useNewUrlParser: true });
    console.info('Successfully connected');
  } catch (err) {
    throw err;
  }
};
