import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello ts!')
})
app.get('/r', (req, res) => {
  res.send('Hello r!')
})
const PORT = 5000
app.listen(PORT, () => console.log(`Server is up and running at http://localhost:${PORT}`));