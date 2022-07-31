AOS.init({
    disable: window.innerWidth < 1024
});

function checking() {
    let data = document.getElementById('input').value
    if (data === 'snanelx') {
        document.getElementById('result').classList.add('result')
        total.innerHTML = 'Аккаунт найден'
    } 
    if (data === '') {
        total.innerHTML = 'Введите ник'
        document.getElementById('result').classList.remove('result')
    }
    if (data !== 'snanelx' & data !== '') {
        total.innerHTML = 'Такого аккаунта не существует'
        document.getElementById('result').classList.remove('result')
    }
} 


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
    document.getElementById("reg").classList.remove('delete');
}
function entry () {
    document.getElementById("reg").classList.add('delete');
    document.getElementById("entry").classList.remove('delete');
}



/* SLIDER */
function Sim(sldrId) {

	let id = document.getElementById(sldrId);
	if(id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.sim-slider')
	};

	// Carousel objects
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');
	this.leftArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-left');
	this.rightArrow = this.sldrRoot.querySelector('div.sim-slider-arrow-right');
	this.indicatorDots = this.sldrRoot.querySelector('div.sim-slider-dots');


    // Initialization
    this.options = Sim.defaults;
    Sim.initialize(this)
};

Sim.defaults = {

// Default options for the carousel
loop: true,     // Бесконечное зацикливание слайдера
auto: true,     // Автоматическое пролистывание
interval: 5000, // Интервал между пролистыванием элементов (мс)
arrows: true,   // Пролистывание стрелками
dots: true      // Индикаторные точки
};

Sim.prototype.elemPrev = function(num) {
num = num || 1;

let prevElement = this.currentElement;
this.currentElement -= num;
if(this.currentElement < 0) this.currentElement = this.elemCount-1;

if(!this.options.loop) {
    if(this.currentElement == 0) {
        this.leftArrow.style.display = 'none'
    };
    this.rightArrow.style.display = 'block'
};

this.sldrElements[this.currentElement].style.opacity = '1';
this.sldrElements[prevElement].style.opacity = '0';

if(this.options.dots) {
    this.dotOn(prevElement); this.dotOff(this.currentElement)
}
};

Sim.prototype.elemNext = function(num) {
num = num || 1;

let prevElement = this.currentElement;
this.currentElement += num;
if(this.currentElement >= this.elemCount) this.currentElement = 0;

if(!this.options.loop) {
    if(this.currentElement == this.elemCount-1) {
        this.rightArrow.style.display = 'none'
    };
    this.leftArrow.style.display = 'block'
};

this.sldrElements[this.currentElement].style.opacity = '1';
this.sldrElements[prevElement].style.opacity = '0';

if(this.options.dots) {
    this.dotOn(prevElement); this.dotOff(this.currentElement)
}
};

Sim.prototype.dotOn = function(num) {
this.indicatorDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;'
};

Sim.prototype.dotOff = function(num) {
this.indicatorDotsAll[num].style.cssText = 'background-color:#556; cursor:default;'
};

Sim.initialize = function(that) {

// Constants
that.elemCount = that.sldrElements.length; // Количество элементов

// Variables
that.currentElement = 0;
let bgTime = getTime();

// Functions
function getTime() {
    return new Date().getTime();
};
function setAutoScroll() {
    that.autoScroll = setInterval(function() {
        let fnTime = getTime();
        if(fnTime - bgTime + 10 > that.options.interval) {
            bgTime = fnTime; that.elemNext()
        }
    }, that.options.interval)
};

// Start initialization
if(that.elemCount <= 1) {   // Отключить навигацию
    that.options.auto = false; that.options.arrows = false; that.options.dots = false;
    that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
};
if(that.elemCount >= 1) {   // показать первый элемент
    that.sldrElemFirst.style.opacity = '1';
};

if(!that.options.loop) {
    that.leftArrow.style.display = 'none';  // отключить левую стрелку
    that.options.auto = false; // отключить автопркрутку
}
else if(that.options.auto) {   // инициализация автопрокруки
    setAutoScroll();
    // Остановка прокрутки при наведении мыши на элемент
    that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
    that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
};

if(that.options.arrows) {  // инициализация стрелок
    that.leftArrow.addEventListener('click', function() {
        let fnTime = getTime();
        if(fnTime - bgTime > 1000) {
            bgTime = fnTime; that.elemPrev()
        }
    }, false);
    that.rightArrow.addEventListener('click', function() {
        let fnTime = getTime();
        if(fnTime - bgTime > 1000) {
            bgTime = fnTime; that.elemNext()
        }
    }, false)
}
else {
    that.leftArrow.style.display = 'none'; that.rightArrow.style.display = 'none'
};

if(that.options.dots) {  // инициализация индикаторных точек
    let sum = '', diffNum;
    for(let i=0; i<that.elemCount; i++) {
        sum += '<span class="sim-dot"></span>'
    };
    that.indicatorDots.innerHTML = sum;
    that.indicatorDotsAll = that.sldrRoot.querySelectorAll('span.sim-dot');
    // Назначаем точкам обработчик события 'click'
    for(let n=0; n<that.elemCount; n++) {
        that.indicatorDotsAll[n].addEventListener('click', function() {
            diffNum = Math.abs(n - that.currentElement);
            if(n < that.currentElement) {
                bgTime = getTime(); that.elemPrev(diffNum)
            }
            else if(n > that.currentElement) {
                bgTime = getTime(); that.elemNext(diffNum)
            }
            // Если n == that.currentElement ничего не делаем
        }, false)
    };
    that.dotOff(0);  // точка[0] выключена, остальные включены
    for(let i=1; i<that.elemCount; i++) {
        that.dotOn(i)
    }
}
};

new Sim()
/* /SLIDER */

/* CATALOG */

function gta5_2() {
    document.getElementById("gta5_2").classList.add('subcatalog');
    document.getElementById("content").classList.add('content');
}
function gta5_2_close() {
    document.getElementById("gta5_2").classList.remove('subcatalog');
    document.getElementById("content").classList.remove('content');
}

function minecraft_2() {
    document.getElementById("minecraft_2").classList.add('subcatalog');
    document.getElementById("content").classList.add('content');
}
function minecraft_2_close() {
    document.getElementById("minecraft_2").classList.remove('subcatalog');
    document.getElementById("content").classList.remove('content');
}




function profile() {
    document.getElementById("profile").classList.add('profile');
}
document.getElementById('content').addEventListener("click", function(){
    document.getElementById("profile").classList.remove('profile');
    document.getElementById("story").classList.remove('story');
}); 


function story() {
    document.getElementById("story").classList.add('story');
}

function story_close() {
    document.getElementById("story").classList.remove('story');
}
/* /CATALOG */

