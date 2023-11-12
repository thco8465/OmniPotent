const db = require('./db'); // Import the database connection
require('dotenv').config();

// Define a function to query the database
async function queryDatabase() {
  try {
    // Use the database connection to run a sample query
    const result = await db.query('SELECT $1::text as message', ['Hello, PostgreSQL']);

    // Access the query result
    console.log('Database Query Result:', result[0].message);

    // Disconnect from the database
    db.$pool.end(); // Close the connection pool

  } catch (error) {
    console.error('Error querying the database:', error);
  }
}

// Call the query function
queryDatabase();
