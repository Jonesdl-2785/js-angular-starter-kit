// todoController.js
angular.module('ToDo', []).
//var todo = angular.module('ToDo', []);
controller("todoController", ["$scope", function($scope){
  $scope.tasks = [
    {"title":"Learn Vanilla JavaScript","completed": false}
  ];

  $scope.addTask = function(){
    $scope.tasks.push({"title":$scope.newTask, "complete":false})
    $scope.newTask = ''
  }
  $scope.taskCompleted = function(){
    $scope.tasks = $scope.tasks.filter(function(task){
      return !task.complete
    })
  }
}])
