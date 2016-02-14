// var mongoose = require('mongoose');

// module.exports = mongoose.model('Book', {
//   name: String,
//   title: String
// });


var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    author: String,
    title: String
  }
);

module.exports = mongoose.model('Book', BookSchema);

