const pgp = require('pg-promise')();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables

db.connect()
  .then(obj => {
    console.log('Connected to the database');
    obj.done(); // Release the connection
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

module.exports = db;