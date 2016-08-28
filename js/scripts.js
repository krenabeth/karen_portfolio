//navigation bar
document.getElementById("nav01").innerHTML =
	"<ul id='navBar'>" +
		"<li id='home' class='tab'><a href='index.html'>Home</a></li>" +
		"<li id='about' class='tab'><a href='about.html'>About</a></li>" +
		"<li id='portfolio' class='tab'><a href='portfolio.html'>Portfolio</a></li>" 
	"</ul>";

// here's some jQuery
$(document).ready(function() {

// global variable for li
	var $tab = $('.tab');
// tabs are hidden, then slide down
	$(function() {
		$($tab).hide().slideDown('slow');
	});

// for each tab, fade to 0.25 opacity for hover
	$tab.hover(function() {
		$( this ).fadeTo('slow', 0.25);	
		},
//return to full opacity when cursor removed
		function(){
			$( this ).fadeTo('slow', 1);
		});

}); // closing out document ready