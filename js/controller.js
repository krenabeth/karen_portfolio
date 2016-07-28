var app = angular.module('projectApp');

app.controller('projectCtrl', function($scope) {
	// here is the array of project objects
	$scope.projects = [
		{
			title: "title here",
			image: {
				path: "image location here",
				altText: "alternative text here"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "describe the project here"

		},
				{
			title: "title here",
			image: {
				path: "image location here",
				altText: "alternative text here"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "describe the project here"

		},
		{
			title: "title here",
			image: {
				path: "image location here",
				altText: "alternative text here"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "describe the project here"

		},
		{
			title: "title here",
			image: {
				path: "image location here",
				altText: "alternative text here"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "describe the project here"

		},
		{
			title: "GSD Theater",
			image: {
				path: "image location here",
				altText: "alternative text here"
			},
			link: "project link here",
			skills: ['skill1', 'skill2', 'skill3'],
			description: "describe the project here"

		},
		{
			title: "Poetry Blog",
			image: {
				path: "image location here",
				altText: "alternative text here"
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