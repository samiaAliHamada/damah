const navbar = document.querySelector('.home__navbar');
const navbarBrand = document.querySelector('.navbar-brand__item');


// sidenav

$('.burger__menu').click(function () {
  $('.side__navbar').animate({
    width: '300px',
    opacity: 1
  });
});

$('.side__navbar__close').click(function () {
  $('.side__navbar').animate({
    width: '0',
    opacity: 0
  });
});



