var express   = require('express');
var hbs       = require('hbs');

var app = express();


app.use(express.static(__dirname + '/public'));


// *************HANDLEBARS CONFIG
app.set('view engine', 'hbs');
app.set('views', './views');

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

app.get('/', (req, res) => {
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  res.render('compliments-index', {
    compliment: randomCompliment,
    color: randomColor
  });
});

app.get("/:name", (req, res) => {
  var randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  res.render('compliments-index', {
    compliment: randomCompliment,
    color: randomColor,
    name: req.params.name
  });
});

app.listen(3000, function() {
     console.log('//*********LISTENING ON PORT 3000********//');
 });
