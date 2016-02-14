var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    author: String,
    title: String
  }
);

module.exports = mongoose.model('Book', BookSchema);

