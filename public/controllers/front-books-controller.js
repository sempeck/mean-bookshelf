var booksAppControllers = angular.module('booksAppControllers', []);

// LIST ////////////////////////////
booksAppControllers.controller('listController', ['$scope', '$http', 
  function($scope, $http) {
      $http.get('/books').success(function (res) {
          $scope.booklist = res;
          $scope.book = "";
      });
}]);

// SINGLE ////////////////////////////
booksAppControllers.controller('singleController', ['$scope', '$routeParams', '$http', '$location',
  function($scope, $routeParams, $http, $location) {
      $http.get('books/' + $routeParams.id).success(function(res) {
      $scope.book = res;
    });

  $scope.deleteBook = function(id) {
      console.log(id);
      $http.delete('/books/' + id).success(function () {
        console.log('Deleting...');
        // back to books
      $location.path('/books');
      });
    };
}]); 

// NEW ////////////////////////////
booksAppControllers.controller('newController', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
      $scope.addBook = function() {
      $http.post('/books', $scope.book).success(function (res) {
        // back to books
        $scope.book = res;
      $location.path('/books/'+$scope.book._id);

      });
    };
}]); 

// EDIT ////////////////////////////
booksAppControllers.controller('editController', ['$scope', '$routeParams', '$http', '$location',
  function($scope, $routeParams, $http, $location) {
        $http.get('books/' + $routeParams.id).success(function(res) {
      $scope.book = res;
    });

  $scope.updateBook = function() {
     $http.put('/books/' + $scope.book._id, $scope.book).success(function (res) {
        // back to books
      $scope.book = res;
      $location.path('/books/'+$scope.book._id);
      });
    };

}]); 
