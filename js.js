$('a[href^="#"]').click(function(event)
 {
  var id = $(this).attr("href");
  var offset = 10;
  var target = $(id).offset().top - offset;
  $('html, body').animate({scrollTop:target}, 500);
  event.preventDefault();
});
	
var offset = 100;
$(window).scroll(function() {
  if($(this).scrollTop() > offset) {
   $('nav').addClass('small');
  } else {
    $('nav').removeClass('small');
  }
});
