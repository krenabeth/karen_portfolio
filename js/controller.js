var app = angular.module('projectApp');

app.controller('projectCtrl', function($scope) {
	// here is the array of project objects
	$scope.projects = [
		{
			title: "Lockbox",
			image: {
				path: "images/lockbox_screenshot.png",
				altText: "lockbox"
			},
			link: "https://github.com/krenabeth/lockbox",
			skills: ['JavaScript', 'AngularJS'],
			description: "Game app for 2nd grade level, practicing math and life skills"

		},
		{
			title: "cat match",
			image: {
				path: "images/catmatch_screenshot.png",
				altText: "catmatch"
			},
			link: "https://github.com/krenabeth/catmatch",
			skills: ['AngularJS', 'jQuery', 'API'],
			description: "Spoof of match.com with petfinder.com API"

		},
		{
			title: "FitKnit",
			image: {
				path: "images/fitknit.png",
				altText: "FitKnit"
			},
			link: "http://fitknit.herokuapp.com",
			skills: ['AngularJS'],
			description: "Group project - final project for Grand Circus bootcamp. Fitbit user application"

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
				altText: ""
			},
			link: "https://github.com/krenabeth/lab13-talk-a-thon",
			skills: ['JavaScript', 'AngularJS'],
			description: "Six-year-old talk simulator - AngularJS to add text to the DOM"

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
			title: "Travel the World",
			image: {
				path: "images/travel.png",
				altText: ""
			},
			link: "https://github.com/joshtlk1/TravelTheWord_flickr_apilab18",
			skills: ['AngularJS'],
			description: "Group project, lab 18 for Grand Circus"

		}, 
		{
			title: "Poetry Blog",
			image: {
				path: "images/poetry.png",
				altText: ""
			},
			link: "https://github.com/krenabeth/poetry_blog",
			skills: ['Bootstrap'],
			description: "Bootstrap project, lab for Grand Circus front-end bootcamp"

		},
		{
			title: "Choosing a Pet",
			image: {
				path: "images/lab14-cat-dog.png",
				altText: ""
			},
			link: "https://github.com/krenabeth/lab14-cat-dog",
			skills: ['JavaScript', 'AngularJS'],
			description: "Single Page Application, lab 14 for Grand Circus front-end bootcamp"

		}
	] // closing projects array
});