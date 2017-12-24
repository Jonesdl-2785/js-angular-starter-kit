// todoController.js
var todo = angular.module('todo');
controller("todoController", ["$scope", function($scope){
  $scope.tasks = [
    {"title":"Enroll in HTML5 & CSS3 Course","completed": false}
  ];


  $scope.addTask = function(){
    $scope.tasks.push({"title":$scope.newTask,"complete":false})
    $scope.newTask = "";
  }

  $scope.taskCompleted = function(){
    $scope.tasks = $scope.tasks.filter(function(task){
      return !task.complete;
    })
  }
}]);
