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
booksAppControllers.controller('singleController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
      $http.get('books/' + $routeParams.id).success(function(res) {
      $scope.book = res;
    });

  $scope.deleteBook = function(id) {
      console.log(id);
      $http.delete('/books/' + id).success(function (res) {
        console.log('Deleting...');
        $scope.book = "";
        // powrót do str. głównej
      });
    };
}]); 

// NEW ////////////////////////////
booksAppControllers.controller('newController', ['$scope', '$http',
  function($scope, $http) {
      $scope.addBook = function() {
      $http.post('/books', $scope.book).success(function (res) {
        $scope.book = "";
        // powrót do str. książki
      });
    };
}]); 

// EDIT ////////////////////////////
booksAppControllers.controller('editController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
        $http.get('books/' + $routeParams.id).success(function(res) {
      $scope.book = res;
    });

  $scope.updateBook = function() {
     $http.put('/books/' + $scope.book._id, $scope.book).success(function () {
        // powrót do str. książki

       // console.log($location.path);
      });
    };

}]); 
