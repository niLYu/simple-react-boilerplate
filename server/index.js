const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, '../public')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

if (module === require.main) {
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
  });
}
