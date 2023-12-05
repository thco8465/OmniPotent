const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const db = require('../Database/db.js'); // Adjust the path accordingly
const PORT = 5173; // Update the port to match the frontend
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(history());
app.use(cors());
const path = require('path');
const staticPath = path.resolve(__dirname, '../test/newFrontEnd/src');
console.log('Static path:', staticPath);
app.use(express.static(staticPath));
// // New endpoint for account creation
// app.post('/createAccount', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Perform a database insert to create a new user
//     await db.none('INSERT INTO users(username, email, password) VALUES($1, $2, $3)', [username, email, password]);

//     res.json({ success: true });
//   } catch (error) {
//     console.error('Error creating account:', error);
//     res.json({ success: false });
//   }
// });

// app.get('/UserData', async (req, res) => {
//   const { username, email, password } = req.params;

//   try {
//     // Query the database for user information based on the provided username
//     const result = await db.oneOrNone('SELECT id, username, email FROM users WHERE username = $1', [username]);

//     if (result) {
//       res.json({ success: true, user: result });
//     } else {
//       res.json({ success: false, message: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching user information:', error);
//     res.json({ success: false, message: 'Error fetching user information' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});