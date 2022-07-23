const check = document.querySelector('.main');
const menu__box = document.querySelector('.menu__box');

check.addEventListener('click', event => {
    menu__toggle.checked = false;
});
menu__box.addEventListener('click', event => {
    menu__toggle.checked = false;
});

function reg() {
    document.getElementById("reg").classList.add('reg');
    document.getElementById("entry").classList.add('delete');
}
function entry () {
    document.getElementById("reg").classList.add('delete');
    document.getElementById("entry").classList.remove('delete');
}



AOS.init({
    disable: window.innerWidth < 1024
});