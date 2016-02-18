var bookshelfApp = angular.module('bookshelfApp', [
  'ngRoute',
  'booksAppControllers'
]);

bookshelfApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'views/list.html',
        controller: 'listController'
      }).
      when('/books/:id', {
        templateUrl: 'views/single.html',
        controller: 'singleController'
      }).
      when('/new', {
        templateUrl: 'views/new.html',
        controller: 'newController'
      }).
      otherwise({
        redirectTo: '/books'
      });
  }]);