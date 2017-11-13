// FOR SCROLLING TO SECTIONS

$("clickedMain").click(function() {
  	$('html,body').animate({
    	scrollTop: $("#mainpage").offset().top},'slow');
	}
);

$("#clickedAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutpage").offset().top}, 2000);
	}	
);

$("#clickedMainButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutpage").offset().top}, 2000);
	}	
);

$("clickedExperience").click(function() {
  	$('html,body').animate({
    	scrollTop: $("#experiencepage").offset().top},'slow');
	}
);

$("clickedContact").click(function() {
  	$('html,body').animate({
    	scrollTop: $("#contactpage").offset().top},'slow');
	}
);

// FOR CONTACT LINK

