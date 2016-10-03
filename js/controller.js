var app = angular.module('projectApp');

app.controller('projectCtrl', function($scope) {
	// here is the array of project objects
	$scope.projects = [
		{
			title: "Lockbox",
			image: {
				path: "images/lockbox_screenshot.png",
				altText: "lockbox screenshot"
			},
			link: "https://github.com/krenabeth/lockbox",
			skills: ['JavaScript', 'AngularJS'],
			description: "Game app for 2nd grade level, practicing math and life skills, using JavaScript and AngularJS"

		},
		{
			title: "cat match",
			image: {
				path: "images/catmatch_screenshot.png",
				altText: "catmatch screenshot"
			},
			link: "https://github.com/krenabeth/catmatch",
			skills: ['AngularJS', 'jQuery'],
			description: "Spoof of match.com with petfinder.com API, AngularJS, and jQuery"

		},
		{
			title: "FitKnit",
			image: {
				path: "images/fitknit.png",
				altText: "FitKnit screenshot"
			},
			link: "http://fitknit.herokuapp.com",
			skills: ['AngularJS'],
			description: "Final group project for Grand Circus bootcamp - Fitbit user application using AngularJS"

		},
		{
			title: "Art by Pat Langner",
			image: {
				path: "images/plangner.png",
				altText: "Art by Pat Langner screenshot"
			},
			link: "http://www.patlangner.com",
			skills: ['JavaScript', 'AngularJS'],
			description: "Artist Pat Langner - artist information and gallery using Lightbox plugin, AngularJS, JavaScript"

		},
		{
			title: "Talk-a-thon",
			image: {
				path: "images/talk_a_thon_project.png",
				altText: "Talk-a-thon screenshot"
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
				altText: "Travel site screenshot"
			},
			link: "https://github.com/joshtlk1/TravelTheWord_flickr_apilab18",
			skills: ['AngularJS'],
			description: "Group project, lab 18 for Grand Circus using AngularJS"

		}, 
		{
			title: "Poetry Blog",
			image: {
				path: "images/poetry.png",
				altText: "blog screenshot"
			},
			link: "https://github.com/krenabeth/poetry_blog",
			skills: ['Bootstrap'],
			description: "Bootstrap project, lab for Grand Circus front-end bootcamp"

		},
		{
			title: "Choosing a Pet",
			image: {
				path: "images/lab14-cat-dog.png",
				altText: "Pet site screenshot"
			},
			link: "https://github.com/krenabeth/lab14-cat-dog",
			skills: ['JavaScript', 'AngularJS'],
			description: "Single Page Application, lab 14 for Grand Circus front-end bootcamp"

		}
	] // closing projects array
});