var express   = require('express');
var hbs       = require('hbs');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, function() {
     console.log('//*********LISTENING ON PORT 3000********//');
 });
