angular.module('randomGenre.links', [])

app.controller("mainController", function($scope, $http) {

	$scope.apiKey = "da879f7e8e7d62569d51c4f04ec32b8a"
	$scope.genres = ["Action", "Adventure", "Animation", "Comedy"
					"Crime", "Documentary", "Drama", "Family",
					"History", "Horror", "Music", "Mystery",
					"Romance", "Science Fiction", "TV Movie", "Thriller",
					"War", "Western"]

})