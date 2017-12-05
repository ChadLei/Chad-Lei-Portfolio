
$(document).ready(function () {
  // FOR SCROLLING TO SECTIONS
  $("#clickedMain").click(function() {
    // console.log("test");
    	$('html,body').animate({
      	scrollTop: $("#mainpage").offset().top}, 1000);
  	}
  );

  $(".btn").click(function() {
    // console.log("test");
      $('html,body').animate({
        scrollTop: $("#aboutpage").offset().top}, 1000);
    }
  );

  $("#clickedAbout").click(function() {
      $('html, body').animate({
          scrollTop: $("#aboutpage").offset().top}, 1000);
  	}	
  );

  $("#clickedMainButton").click(function() {
      $('html, body').animate({
          scrollTop: $("#aboutpage").offset().top}, 1000);
  	}	
  );

  $("#clickedExperience").click(function() {
    	$('html,body').animate({
      	scrollTop: $("#experiencepage").offset().top},1000);
  	}
  );

  $("#clickedContact").click(function() {
    	$('html,body').animate({
      	scrollTop: $("#contactpage").offset().top},1000);
  	}
  );

  // FOR FADING-IN DIVS LINK

  // $('h1.hidden').fadeIn(2000).removeClass('hidden');

  // $('h4.hidden').fadeIn(4500).removeClass('hidden');

  // $('div.hidden').fadeIn(2000).removeClass('hidden');

})