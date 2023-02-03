const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const express = require("express");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});