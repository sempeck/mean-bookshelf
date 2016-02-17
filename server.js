var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    // _               = require('lodash'),
    booksController = require('./controllers/books-controller');


mongoose.connect('mongodb://localhost/bookshelf2');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MONGOOSE ///////////////////////////
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error: '));
// db.once('open', function() {
//   console.log('Połączenie z bazą danych nawiązane.');
// });
///////////////////////////////////////

// tutaj będzie przekierowanie do index.html
// app.use(express.static(__dirname + '/public'));
app.use(express.static('./public'));
app.get('*', function (req, res) {
  res.sendfile('public/main.html');
});

// ROUTERS ////////////////////////////
app.get('/books', booksController.list);
app.get('/books/:id', booksController.showOne);
app.post('/books', booksController.create);
app.put('/books/:id', booksController.edit);
app.delete('/books/:id', booksController.remove);
///////////////////////////////////////


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

// obsługa nieistniejących adresów
app.use(function(req, res, next) {
  res.status(404).send('Nie ma takiego numeru...');
});