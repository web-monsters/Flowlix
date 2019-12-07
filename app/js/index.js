'use strict';

// Slide scrolltop
(function () {
  let links = [
    'technique',
    'team',
    'customers',
    'feedback',
    'blog',
  ]

  links.forEach(item => {
    $(`a[href^="#${item}"]`).on('click', function(event) {
      let target = $($(this).attr('href'));

      if(target.length) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
      }
    });
  });

  $('button[href^="#feedback"]').on('click', function(event) {
    let  target = $($(this).attr('href'));

    if(target.length) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
    }
  });
})();




// Slick Slider
$(document).ready(function() {
  $('.reviews-slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          verticalSwiping: false,
        }
      }
    ] 
  });
});




// Contact Us Form Switch 
(function () {
  let activeClassName = 'active';
  let buttons = Array.from(document.querySelectorAll('#feedback .feedback__header .feedback__button'));

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


// Header hamburger
(function () {
  let hamburger = document.querySelector('.hamburger.hamburger--emphatic');
  let navigation = document.querySelector('.header__navigation-list');

  /**
    * @method showMenu
    */
  function showMenu () {
    navigation.style.display = 'flex';
    navigation.classList.add('displayed');
  }

  /**
    * @method hideMenu
    */
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