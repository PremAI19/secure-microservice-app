const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('User Service is running');
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
