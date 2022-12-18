// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello jes!')
})
app.get('/r', (req, res) => {
  res.send('Hello r!')
})
const PORT = 5000
app.listen(PORT, () => console.log(`Server is up and running at http://localhost:${PORT}`));