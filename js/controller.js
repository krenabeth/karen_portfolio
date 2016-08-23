var app = angular.module('projectApp');

app.controller('projectCtrl', function($scope) {
	// here is the array of project objects
	$scope.projects = [
		{
			title: "FitKnit",
			image: {
				path: "images/fitknit.png",
				altText: "FitKnit"
			},
			link: "http://fitknit.herokuapp.com",
			skills: ['AngularJS'],
			description: "Fitbit user application"

		},
				{
			title: "Art by Pat Langner",
			image: {
				path: "images/plangner.png",
				altText: ""
			},
			link: "http://www.patlangner.com",
			skills: ['JavaScript', 'AngularJS'],
			description: "artist gallery"

		},
		{
			title: "Talk-a-thon",
			image: {
				path: "images/talk_a_thon_project.png",
				altText: "six-year-old talk simulator"
			},
			link: "https://github.com/krenabeth/lab13-talk-a-thon",
			skills: ['JavaScript', 'AngularJS'],
			description: "AngularJS to add text to the DOM"

		},	
		// {
		// 	title: "Re: Poetry",
		// 	image: {
		// 		path: "",
		// 		altText: " "
		// 	},
		// 	link: "https://cryptic-caverns-43592.herokuapp.com/#/partials/poetry.html",
		// 	skills: ['AngularJS', 'Node.js', 'Heroku'],
		// 	description: ""

		// },
		{
			title: "Choosing a Pet",
			image: {
				path: "images/lab14-cat-dog.png",
				altText: "lab 14 for Grand Circus front-end bootcamp"
			},
			link: "https://github.com/krenabeth/lab14-cat-dog",
			skills: ['JavaScript', 'AngularJS'],
			description: "Single Page Application"

		}
	] // closing projects array
});