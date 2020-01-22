import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
  DATABASE_URL: process.env.DATABASE_URL,
  CLIENT_PATH: 'client/build',
  ALLOWED_ORIGINS: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  EMAIL: process.env.EMAIL || 'girls.sport.news',
  PASSPORT: process.env.PASSPORT || 'SportNews@)19',
};
