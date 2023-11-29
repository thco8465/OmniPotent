const pgp = require('pg-promise')();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

// Create a connection pool
const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

// Create users table
db.none(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`)
  .then(() => {
    console.log('Users table created or already exists');
  })
  .catch(error => {
    console.error('Error creating users table:', error);
  });

// Check the connection
db.connect()
  .then(obj => {
    console.log('Connected to the database');
    obj.done(); // Release the connection
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

module.exports = db;
