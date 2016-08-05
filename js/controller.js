var app = angular.module('projectApp');

app.controller('projectCtrl', function($scope) {
	// here is the array of project objects
	$scope.projects = [
		{
			title: "Fitbit",
			image: {
				path: "",
				altText: ""
			},
			link: "",
			skills: ['skill1', 'skill2', 'skill3'],
			description: ""

		},
				{
			title: "Artwork by Pat Langner",
			image: {
				path: "",
				altText: ""
			},
			link: "http://www.patlangner.com",
			skills: ['AngularJS', 'skill2', 'skill3'],
			description: "artist gallery"

		},
		{
			title: "Talk-a-thon",
			image: {
				path: "images/talk_a_thon_project.png",
				altText: "six-year-old talk simulator"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "AngularJS to add text to the DOM"

		},
		{
			title: "To do list",
			image: {
				path: "images/to_do_project.png",
				altText: " "
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "Using AngularJS to add items to the to-do list"

		},	
		{
			title: "Re: Poetry",
			image: {
				path: "",
				altText: " "
			},
			link: "project link here",
			skills: ['AngularJS', 'skill2', 'skill3'],
			description: "Heroku "

		},
		{
			title: "How to Choose a Pet",
			image: {
				path: "",
				altText: ""
			},
			link: "https://github.com/krenabeth",
			skills: ['AngularJS', 'skill2', 'skill3'],
			description: ""

		}
	] // closing projects array
});