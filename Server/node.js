const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../Database/db.js'); // Adjust the path accordingly
const PORT = 3000;

app.use(bodyParser.json());

// Dummy user data for demonstration (replace with a database)
const users = [
  { username: 'user', password: 'password' },
];

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Query the database for the user with the provided username and password
    const result = await db.oneOrNone('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

    if (result) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.json({ success: false });
  }
});

// New endpoint for account creation
app.post('/api/createAccount', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
