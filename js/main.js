
function currentSlide(n){
    showSlides(n);
}
let activeDot = 0;
let activeSlide = 0;
let blackDot = document.querySelector('.black');
const slides = document.querySelectorAll('.features__content');
const dots = document.querySelectorAll('.dot');
function showSlides(n){
    slides[activeSlide].classList.remove('active');
    slides[n-1].classList.add('active');
    dots[activeDot].classList.remove('black');
    dots[n-1].classList.add('black');
    activeSlide = n - 1;
    activeDot = n - 1;
}

let menuButton = document.querySelector('.header__menu-burger');
let menuUl = document.querySelector('.header__menu-list');
let headerContent = document.querySelector('.header__content');
menuButton.addEventListener("click", function(){
    menuUl.classList.toggle("activeUl");
    headerContent.classList.toggle("notActive");
}, false);


(function() {
    'use strict';
  
    function trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
let features__btn = document.querySelector('#features__btn');
let features = document.querySelector('.features');
let works__btn = document.querySelector('#works__btn');
let works = document.querySelector('.works');
let team__btn = document.querySelector('#team__btn');
let team = document.querySelector('.team');
let contact__btn = document.querySelector('#contact__btn');
let contact = document.querySelector('.discuss');
features__btn.addEventListener('click', () => {
    scrollTo(features);
})
works__btn.addEventListener('click', () => {
    scrollTo(works);
})
team__btn.addEventListener('click', () => {
    scrollTo(team);
})
contact__btn.addEventListener('click', () => {
    scrollTo(contact);
})