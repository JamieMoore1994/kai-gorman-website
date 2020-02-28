// Mobile navigation
const responsiveNav = function() {
    var nav = document.querySelector('.master__header--nav');
    var burger = document.querySelector('.master__header--burger');
    var body = document.querySelector('body');

    burger.addEventListener('click', function() {
        body.classList.toggle('body-toggle');
        nav.classList.toggle('nav-toggle');
    });
}

// Animating the navigation area
function introScene() {
    var logo = document.querySelector('.logo');
    var navLinks = document.querySelector(".master__header--links");
    var burgerDiv = document.querySelector('.master__header--burger');

    let introWrapper = document.querySelector(".page__header--wrapper");
    let bannerImg = document.querySelector(".page__header--image");


    var tl = gsap.timeline({defaults:{opacity: 0, ease: "back"}});
        tl.from(logo, {yPercent: -100, duration: 0.5});
        tl.from(burgerDiv, {yPercent: -100, duration: 0.5}, "<");
        tl.from(navLinks, {yPercent: -100, duration: 0.5}, "<")
        tl.from(introWrapper, {xPercent: -100, duration: 1}, "-=0.4")
        tl.from(bannerImg, {xPercent: 100, duration: 1}, "-=0.4");
};

// Fixing the issue of page rendering before the animation begins
window.addEventListener("load", function(e) {
    gsap.set(".master__header--links", {
        autoAlpha: 1
    });
    gsap.set(".page__header--wrapper", {
        autoAlpha: 1
    });
    gsap.set(".page__header--image", {
        autoAlpha: 1
    });
    responsiveNav();    
    introScene();
});