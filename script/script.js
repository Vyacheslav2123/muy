const check = document.querySelector('.main');
const menu__box = document.querySelector('.menu__box');

check.addEventListener('click', event => {
    menu__toggle.checked = false;
});
menu__box.addEventListener('click', event => {
    menu__toggle.checked = false;
});

AOS.init({
    disable: window.innerWidth < 1024
});