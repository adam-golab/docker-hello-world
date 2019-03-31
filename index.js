const express = require('express')

const app = express();
const world = process.env.WORLD || 'World';

app.set('port', (process.env.PORT || 8000));

app.get('/', function(request, response) {
  response.send(`Hello ${world}`);
});

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
