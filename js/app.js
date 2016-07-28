var app = angular.module('projectApp', []);

app.directive('project', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/project.html'
		// add link here
	};
});