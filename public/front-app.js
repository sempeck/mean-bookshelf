var bookshelf = angular.module('Bookshelf', ['ngRoute', 'ngResource']);

bookshelf.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/books', {
      controller: 'listController',
      templateUrl: 'views/list.html'
    });
  $locationProvider.html5Mode(true);
});