var bookshelf = angular.module('Bookshelf', []);

bookshelf.controller('listController', ['$scope', '$http', 
  function($scope, $http) {

    var refresh = function() {    
      $http.get('/books').success(function (res) {
          $scope.booklist = res;
          $scope.book = "";
      });
    };

    refresh();

    $scope.addBook = function() {
      $http.post('/books', $scope.book).success(function (res) {
        refresh();
      });
    };

    $scope.editBook = function(id) {
      $http.get('/books/' + id).success(function (res) {
        console.log('Editing...');
        $scope.book = res;
      });
    };

    $scope.updateBook = function() {
     $http.put('/books/' + $scope.book._id, $scope.book).success(function (res) {
        refresh();
      });
    };

    $scope.deleteBook = function(id) {
      console.log(id);
      $http.delete('/books/' + id).success(function (res) {
        console.log('Deleting...');
        refresh();
      });

    };

}]);

