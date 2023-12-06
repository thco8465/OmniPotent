const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../Database/db.js'); // Adjust the path accordingly

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Endpoint for account creation
app.post('/createAccount', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await db.none('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [username, email, password]);
    res.json({ success: true });
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
// Endpoint for user login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.oneOrNone('SELECT id, username, email FROM users WHERE username = $1 AND password = $2', [username, password]);

    if (result) {
      res.json({ success: true, user: result });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
// Endpoint for fetching user information
app.get('/userData/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const result = await db.oneOrNone('SELECT id, username, email FROM users WHERE username = $1', [username]);

    if (result) {
      res.json({ success: true, user: result });
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user information:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
