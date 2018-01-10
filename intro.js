
$(document).ready(function(){
	$(function(){

		//first load: this happens
  $('.bxslider').bxSlider({
    captions: true,
    slideWidth: $(window).width()/1,
    minSlides: 1,
    maxSlides: 4,
  });

  //add event listener to the window itself
  $(window).on("resize", function() {
  	console.log("resize");
  	var windowWidth= $(window).width();
  	console.log(windowWidth);

  }); 
  // listen for the resize event

  //once it is resized, calculate window width $(window).width();
  //based on that width, figure out how many slides to display
  //pass that number of slides into bxsliders options
});

});

//button that says thank you, hes a nice button 

  $('button').click(function(){
  	alert("Thank you for Submitting your email");

  });


//smooth scroll code 
$("a[href*='#']:not(a[href='#'])").click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }
});


  