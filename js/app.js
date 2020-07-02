

let lastScrollPos = 0;
let ticking = false;

let home = document.querySelector('.header-cont');
let products = document.querySelector('.products-cont');
let aboutUs = document.querySelector('.about-us-cont');
let contact = document.querySelector('.contact-cont');



window.addEventListener('scroll', function(event) {
  lastScrollPos = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      navScroll(lastScrollPos);
      ticking = false;
    });

    ticking = true;
  }
});
