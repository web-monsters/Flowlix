'use strict';
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




// Contact Us Form Switch 
(function () {
  let activeClassName = 'active';
  let buttons = Array.from(document.querySelectorAll('#feedback .feedback__header .feedback__button'));
  // feedback__form--call
  // feedback__form--write

  /**
    * @method clearActiveClasses
    */
  function clearActiveClasses (items) {
    items.forEach(item => item.classList.remove(activeClassName));
  }

  /**
    * @method showWriteForm
    */
  function showWriteForm () {
    document.querySelector('.feedback__form--call').style.display = 'none';
    document.querySelector('.feedback__form--write').style.display = 'flex';
  }

  /**
    * @method showCallForm
    */
  function showCallForm () {
    document.querySelector('.feedback__form--write').style.display = 'none';
    document.querySelector('.feedback__form--call').style.display = 'flex';
  }

  /**
    * @method addButtonsListeners
    */
  function addButtonsListeners (items) {
    items.forEach(item => {
      item.addEventListener('click', function (event) {
        clearActiveClasses(items);

        item.classList.add(activeClassName);

        item.classList.contains('feedback__button--write') ? 
        showWriteForm() : showCallForm();
      });
    });
  }
  
  addButtonsListeners(buttons);
})();


// header hamburger
(function () {
  let hamburger = document.querySelector('.hamburger.hamburger--emphatic');
  let navigation = document.querySelector('.header__navigation-list');

  function showMenu () {
    navigation.style.display = 'flex';
    navigation.classList.add('displayed');
  }

  function hideMenu () {
    navigation.style.display = 'none';
    navigation.classList.remove('displayed');
  }

  hamburger.addEventListener('click', function (event) {
    hamburger.classList.toggle('is-active');

    hamburger.classList.contains('is-active') ? 
    showMenu() : hideMenu();
  });
})();