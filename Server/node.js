const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

// Dummy user data for demonstration (replace with a database)
const users = [
  { username: 'user', password: 'password' },
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Replace with actual authentication logic (e.g., database query)
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
