angular.module('Bookshelf')
  .factory('Book', function ($resource) {
    return $resource('books/:id', { id: '@id' });
  });