const responsiveNav = function() {
    const nav = document.querySelector('.master__header--nav');
    const burger = document.querySelector('.master__header--burger');
    const body = document.querySelector('body');

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-toggle');
        body.classList.toggle('body-toggle');
    });
}

responsiveNav();
