import dotenv from 'dotenv';

dotenv.config();

const PREFIX = /^CTF_/;

const env = {};

Object.entries(process.env).forEach(([key, value]) => {
  if (PREFIX.test(key)) {
    env[key] = value;
  }
});

export default env;
