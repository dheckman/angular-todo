	var app = angular.module('todo', [ ]);

	app.controller('TodoController', function ($scope) {
		$scope.todos = [
		{ taskName: "write something", isDone: false},
		{ taskName: "poop", isDone: false}
		];

		$scope.totalTodos = function() {
			return $scope.todos.length;
		};

		$scope.addTodo = function() {
			$scope.todos.push({taskName: $scope.newTodo, isDone: false});
			$scope.newTodo = " ";
		};

		$scope.deleteTodo = function(index) {
			$scope.todos.splice(index, 1);
			$scope.$apply();
		};
	});




