var Book = require('../models/book');

module.exports.create = function (req, res) {
  var book = new Book(req.body);
  book.save(function (err, result) {
    if (err)
      res.send(err);
    res.json(result);
  });
};

module.exports.showOne = function (req, res) {
  Book.findById(req.params.id, function (err, result) {
    if (err)
      res.send(err);
    res.json(result);
  }
)};

module.exports.list = function (req, res) {
  Book.find({}, function (err, results) {
    if (err)
      res.send(err);
    res.json(results);
  });
};

module.exports.edit = function (req, res) {
  Book.findById(req.params.id, function (err, result) {
    result.author = req.body.author;
    result.title = req.body.title;
    result.save(function (err, result) {
      if (err)
        res.send(err);
      res.json(result);
    });
  });
};

module.exports.remove = function (req, res) {
  Book.findByIdAndRemove(req.params.id, function(err) {
    if (err)
      res.send(err);
    res.json('Removed');
  });
};
