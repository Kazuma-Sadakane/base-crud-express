import express from 'express';

const app = express();
const port = 8000;

app.get('/', (_req, res) => {
  res.send('Hello from host');
});

app.listen(port, () => {
  console.log(`host listening at http://localhost:${port}`);
});
