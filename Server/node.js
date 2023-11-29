const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../Database/db.js'); // Adjust the path accordingly
const PORT = 5173; // Update the port to match the frontend

app.use(bodyParser.json());

// Dummy user data for demonstration (replace with a database)
const users = [
  { username: 'user', password: 'password' },
];

// New endpoint for account creation
app.post('/createAccount', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Perform a database insert to create a new user
    await db.none('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [username, email, password]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error creating account:', error);
    res.json({ success: false });
  }
});

app.get('/createAccount', async (req, res) => {
  const { username, email, password } = req.params;

  try {
    // Query the database for user information based on the provided username
    const result = await db.oneOrNone('SELECT id, username, email FROM users WHERE username = $1', [username]);

    if (result) {
      res.json({ success: true, user: result });
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user information:', error);
    res.json({ success: false, message: 'Error fetching user information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
