import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
  DATABASE_URL: process.env.DATABASE_URL,
  CLIENT_PATH: 'client/build',
  ALLOWED_ORIGINS: ['http://127.0.0.1:3000', 'http://localhost:3000'],
  EMAIL: process.env.EMAIL || 'girls.sport.news',
  PASSPORT: process.env.PASSPORT || 'SportNews@)19',
  JWT_KEY: process.env.JWT_KEY || 'PRIVATE_KEY',
  BACKEND_DOMAIN: process.env.BACKEND_DOMAIN || 'http://localhost:9001',
  FRONT_DOMAIN: process.env.FRONT_DOMAIN || 'http://localhost:3000',
  TOKEN_TIME: process.env.TOKEN_TIME,
};
