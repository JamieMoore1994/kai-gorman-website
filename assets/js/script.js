// Mobile navigation
const responsiveNav = function() {
    let nav = document.querySelector('.master__header--nav');
    let burger = document.querySelector('.master__header--burger');
    let body = document.querySelector('body');

    burger.addEventListener('click', function() {
        body.classList.toggle('body-toggle');
        nav.classList.toggle('nav-toggle');
    });
}

responsiveNav();


// Animating the navigation area
function introScene() {
    var logo = document.querySelector('.logo');
    var nav = document.querySelector(".master__header--nav");
    var navLinks = document.querySelectorAll(".master__header--links li");

    var introWrapper = document.querySelector(".page__header--wrapper");
    var bannerImg = document.querySelector(".page__header--image");


    var tl = gsap.timeline({defaults:{opacity: 0}});
        tl.from(logo, {xPercent: -100});
        tl.from(nav, {}, "<")
        tl.from(navLinks, {duration: 1, stagger: 0.2, ease: "bounce"}, "<")
        tl.from(introWrapper, {xPercent: -100, ease: "back", duration: 1.5}, "-=0.4")
        tl.from(bannerImg, {xPercent: 100, duration: 1}, "-=0.8");

};

// Fixing the issue of page rendering before the animation begins
window.addEventListener("load", function(e) {
    gsap.set(".master__header", {
        autoAlpha: 1
    });
    gsap.set(".page__header", {
        autoAlpha: 1
    });
    gsap.set(".page__header--wrapper", {
        autoAlpha: 1
    });
    introScene();
});
