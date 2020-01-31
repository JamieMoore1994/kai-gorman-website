
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


