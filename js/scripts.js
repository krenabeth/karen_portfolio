//navigation bar
document.getElementById("nav01").innerHTML =
	"<ul id='navBar'>" +
		"<li><div id='home' class='tab'><a href='index.html'>Home</a></div></li>" +
		"<li><div id='about' class='tab'><a href='about.html'>About</a></div></li>" +
		"<li><div id='portfolio' class='tab'><a href='portfolio.html'>Portfolio</a></div></li>" 
	"</ul>";

// here's some jQuery
$(document).ready(function() {

// global variable for li
	var $tab = $('.tab');
// tabs are hidden, then slide down
	$(function() {
		$($tab).hide().slideDown('slow');
	});

}); // closing out document ready