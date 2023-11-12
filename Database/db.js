const pgp = require('pg-promise')();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports = db;
