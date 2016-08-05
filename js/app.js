var app = angular.module('projectApp', []);

app.directive('project', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/project.html'
		// add link here
	};
});

// app.directive('descrip',function($scope, projectCtrl){
//   return {
//       restrict: 'E',
//       replace: true, 
//       scope: true,
//       template: "ng-click=(alert({{ projects.description }})"
//   }     
// });
  