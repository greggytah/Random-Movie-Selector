
var actionGenre = ["941", "76341", "245891", "272", "37724",
					"10999", "9874", "10117", "25553", "94329"];

var adventureGenre = ["120", "22","85", "105", "983", "14815",
					  "947", "36819", "9326", "24965", "9387"]

var animationGenre = ["109445", "9806", "14160", "408", "10020",
					  "808", "11837", "16220", "11886", "128"];

var comedyGenre = ["11072", "8469", "6471", "11977", "13342",
				   "378", "8699", "209403", "762", "239"];

var crimeGenre = ["1051", "242582", "154400", "769", "238", "680",
				  "107", "111", "2118", "949"];

var documentaryGenre = ["84342", "89704", "14242", "214314", "14048",
						"1781", "19851", "14285", "2260", "69480"];

var dramaGenre = ["244786", "87492", "85350", "24226", "14554",
				  "221", "702", "3112", "510", "380"];

var familyGenre = ["252", "9836", "9969", "227973", "11459",
				   "10054", "3050", "11774", "601", "124324"];

var foreignGenre = ["406", "10086", "12259", "439", "1391",
					"108", "64", "346", "11423", "2000"];

var historyGenre = ["612", "14292", "424", "197", "98",
					"42668", "76203", "1495", "3131", "3291"];

var horrorGenre = ["694", "1255", "948", "578", "9552",
				   "31592", "11772", "539", "571", "30497"];

var musicGenre = ["1725", "15121", "824", "1574", "15300",
				  "13763", "331781", "82695", "11113", "11326"];

var mysteryGenre = ["2649", "622", "17124", "58574", "32042",
					"31713", "46738", "141", "670", "15472"];

var romanceGenre = ["4348", "509", "454", "1934", "152584",
					"64682", "508", "851", "770", "37274"];

var scienceFictionGenre = ["180", "62", "686", "782", "78",
						   "68", "830", "3596", "11", "10540"];

var thrillerGenre = ["42526", "805", "807", "241848", "289",
					 "14054", "275", "103", "210577", "252178"];

var warGenre = ["600", "11202", "2024", "387", "5925",
 				"9289", "826", "25", "143", "28"];

var westernGenre = ["3114", "3089", "42491", "11969", "4512",
					"391", "576", "301", "980", "8879"];


var randomId = function (array) {
	return array[Math.floor(Math.random() * array.length)];
}


$(document).ready(function() {
	var baseUrl = "https://www.themoviedb.org/movie/",
		apiKey = "?api_key=da879f7e8e7d62569d51c4f04ec32b8a";

	$("#genre").change(function() {
		if($(this).val() === "Action") {
			window.open(baseUrl + randomId(actionGenre))
		} else if($(this).val() === "Adventure") {
			window.open(baseUrl + randomId(adventureGenre));
		} else if($(this).val() === "Animation") {
			window.open(baseUrl + randomId(animationGenre));
		} else if($(this).val() === "Comedy") {
			window.open(baseUrl + randomId(comedyGenre));
		} else if($(this).val() === "Crime") {
			window.open(baseUrl + randomId(crimeGenre));
		} else if($(this).val() === "Documentary") {
			window.open(baseUrl + randomId(documentaryGenre));
		} else if($(this).val() === "Drama") {
		  	window.open(baseUrl + randomId(dramaGenre));
		} else if($(this).val() === "Family") {
			window.open(baseUrl + randomId(familyGenre));
		} else if($(this).val() === "Foreign") {
			window.open(baseUrl + randomId(foreignGenre))
		} else if($(this).val() === "History") {
			window.open(baseUrl + randomId(historyGenre));
		} else if($(this).val() === "Horror") {
			window.open(baseUrl + randomId(horrorGenre));
		} else if($(this).val() === "Music") {
			window.open(baseUrl + randomId(musicGenre));
		} else if($(this).val() === "Mystery") {
			window.open(baseUrl + randomId(mysteryGenre));
		} else if($(this).val() === "Romance") {
			window.open(baseUrl + randomId(romanceGenre));
		} else if($(this).val() === "Science Fiction") {
			window.open(baseUrl + randomId(scienceFictionGenre));
		} else if($(this).val() === "Thriller") {
			window.open(baseUrl + randomId(thrillerGenre));
		} else if($(this).val() === "War") {
			window.open(baseUrl + randomId(warGenre));
		} else if($(this).val() === "Western") {
			window.open(baseUrl + randomId(westernGenre));
		}
	})
})

// $(document).ready(function() {
//     var url = 'http://api.themoviedb.org/3/',
//         mode = 'genre/',
//         endMode = '/movies',
//         genreId,
//         key = '?api_key=da879f7e8e7d62569d51c4f04ec32b8a';

//     $('button').click(function() {
//         var input = $('#movie').val(),
//             genreId = encodeURI(input);
//         $.ajax({
//             type: 'GET',
//             url: url + mode + genreId + endMode + key,
//             async: false,
//             jsonpCallback: 'testing',
//             contentType: 'application/json',
//             dataType: 'jsonp',
//             success: function(json) {
//                 console.dir(json);
//             },
//             error: function(e) {
//                 console.log("Error");
//             }
//         });
//     });
// });

// var randomTitle = function () {

// }


//user selects a genre
//then on submit of that genre id select a movie within that genre
//movie url will be equal to randomly generated movie id within the url


//return the movie title as a clickable link that brings user to the page for that movie
//Optional: saves the movie to a Mongo database

