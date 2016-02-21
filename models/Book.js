var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    author: [ {name: String, surname: String} ],
    title: String,
    subtitle: String,
    publisher: String,
    isbn: String,
    categories: [{category: String}],
    tags: [{tag: String}],
    image: String,
    leased: Boolean
  }
);

module.exports = mongoose.model('Book', BookSchema);
