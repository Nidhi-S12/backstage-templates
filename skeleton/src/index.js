const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from your Node.js app on EC2!');
});
app.listen(3000, () => {
  console.log('Server running on port 3000');
});