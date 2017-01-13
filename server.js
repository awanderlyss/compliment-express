var express   = require('express');
var hbs       = require('hbs');

var app = express();


app.use(express.static(__dirname + '/public'));


// *************HANDLEBARS CONFIG
app.set('view engine', 'hbs');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('compliments-index');
});

app.listen(3000, function() {
     console.log('//*********LISTENING ON PORT 3000********//');
 });
