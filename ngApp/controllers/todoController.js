// todoController.js
 //angular.module('ToDo', []).
var todo = angular.module('ToDo', []);
todo.controller("todoController", ["$scope", function ($scope){
  $scope.tasks = [
    {"title":"Learn Vanilla JavaScript","completed": false}
  ];


  $scope.addTask = function(){
    $scope.tasks.push({"title":$scope.newTask,"complete":false})
    $scope.newTask = "";
  };

  $scope.taskCompleted = function(){
    var oldTasks = $scope.todoTasks;
    $scope.tasks = $scope.tasks.filter(function(task){
      if (!x.complete) $scope.todoTasks.push(x);
      return !task.complete;
    });
  };
}]);
