var app = angular.module('projectApp');

app.controller('projectCtrl', function($scope) {
	// here is the array of project objects
	$scope.projects = [
		{
			title: "Everything Elephant",
			image: {
				path: "images/elephant_project.png",
				altText: "elephant articles project"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "Added articles and comments using AngularJS directive"

		},
				{
			title: "Hamster Heaven",
			image: {
				path: "images/hamster_project.png",
				altText: "hamster characters project"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "Hamster fan site"

		},
		{
			title: "Talk-a-thon",
			image: {
				path: "images/talk_a_thon_project.png",
				altText: "six-year-old talk simulator"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "Using AngularJS to add text and decorated text to the DOM"

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
			title: "GSD Theater",
			image: {
				path: "images/theater_project.png",
				altText: " "
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "Theater reservations"

		},
		{
			title: "Poetry Blog",
			image: {
				path: "images/poetry.png",
				altText: " "
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "describe the project here"

		},
		{
			title: "Treehouse",
			image: {
				path: "images/TreehouseFriends.png",
				altText: "Berenstain Bears fan club website project"
			},
			link: "https://github.com/krenabeth/Langner_Bootstrap",
			skills: ['bootstrap', 'skill2', 'skill3'],
			description: "Fan page for the Berenstain Bears tv show (2003) using Bootstrap"

		}
	] // closing projects array
});