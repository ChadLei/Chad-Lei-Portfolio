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

$("clickedExperience").click(function() {
  	$('html,body').animate({
    	scrollTop: $("#experiencepage").offset().top},'slow');
	}
);