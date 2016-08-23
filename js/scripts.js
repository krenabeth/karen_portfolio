//navigation bar
document.getElementById("nav01").innerHTML =
	"<ul id='navBar'>" +
		"<li id='home' class='tab'><a href='index.html'>Home</a></li>" +
		"<li id='about' class='tab'><a href='about.html'>About</a></li>" +
		"<li id='portfolio' class='tab'><a href='portfolio.html'>Portfolio</a></li>" 

		// fix the following to work on other pages than index
	// 	"<li id='contact' class='tab'><a href='#contact'>Contact</a></li>" +
	"</ul>";

// here's some jQuery
$(document).ready(function() {



$('#button').on('click', function(event) {
	console.log("hi");
  $( '#contact' ).hide(); //this line not doing anything
   	console.log("bye");

});


// global variable for li
var $tab = $('.tab');
// tabs are hidden, then slide down
$(function() {
	$($tab).hide().slideDown('slow');
});
// styling for tab of current page
// find div -ids:  main about folio codes contact - (could locate as fourth child of the body element) 
// $(document).load(function() {
// // remove the current class on all tabs
// // if the fourth child of the body is main
// 	if (div.find($'.main')) {
// 		// find li with id home and make the class current instead of tab
// 	}
// // if the fourth child is about
// 	else if (div.find($'about')){
// 		// find the li with id about and make the class current instead of tab
// 	}
// // if the fourth child is folio
// 	else if (div.find($'folio'){

// 	}
// 	// codes
// 	else if {
// 		//contact
// 	}
// 	else {
// 		console.log('contact info');
// 	}
// });
// declare the above as variable $current
// var $current = ;
// $($current).removeAttr('tab'); // remove the attribute of tab class
// $($current).attr('class', 'current'); // add the current class attribute

// flip the sections on index.html with div id's main codes contact according to which corresponding tab was clicked on
// for each tab, fade to 0.25 opacity for hover
$tab.hover(function() {
	$( this ).fadeTo('slow', 0.25);	
	},
//return to full opacity when cursor removed
	function(){
	$( this ).fadeTo('slow', 1);
	});
});
// swith the photos on about page
// $('#aboutImg2').hide();

// $( "#aboutImg1" ).hide(function() {
//   $( "this" ).toggle().fadeIn( "slow", function() {
//     $( "#aboutImg1" ).fadeOut("slow", 100);
//   });



 // closing out document ready