const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Simple Node App!');
});

app.get('/error', (req, res) => {
  // Simule une erreur pour les logs
  console.error('Simulating a 500 error for logging purposes.');
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});