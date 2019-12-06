console.log('a');

// Slide scrolltop
$('a[href^="#technique"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
  }
});

$('a[href^="#team"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
  }
});

$('a[href^="#customers"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
  }
});

$('a[href^="#feedback"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
  }
});

$('a[href^="#blog"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
  }
});

$('button[href^="#feedback"]').on('click', function(event) {
  var target = $( $(this).attr('href') );
  if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
  }
});


// slick 
$(document).ready(function() {
  $('.reviews-slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
  });
});