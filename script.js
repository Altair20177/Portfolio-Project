import i18Obj from './translate.js';

const allLinks = document.querySelectorAll('footer a');
allLinks.forEach(link => link.onclick = e => e.preventDefault());

const seasonsBtns = document.querySelectorAll('.season__btn');
const languages = document.querySelectorAll('.header__navbar-language span');

const allSeasonsButtons = document.querySelector('.seasons__btns');

const burger = document.querySelector('.burger');
const container = document.querySelector('.container');
const cross = document.querySelector('.cross');
const sidebarsLinks = document.querySelectorAll('aside a');
const sideMenu = document.querySelector('aside');

const theme = document.querySelector('.theme');

theme.onclick = () => {
    document.querySelectorAll('.theme img').forEach(activeTheme => {
        activeTheme.classList.toggle('nonactive__theme');
    });
}

/* ------------------------------Активная кнопка сезона и фотографии------------------------------ */
allSeasonsButtons.onclick = event => {
    if(event.target.classList.contains('season__btn')){
        document.querySelectorAll('.portfolio__images img').
        forEach((image, index) => image.src = `assets/${event.target.dataset.season}/${index + 1}.jpg`);
    }
}

seasonsBtns.forEach(seasonBtn => {
    seasonBtn.addEventListener('click', () => {
        seasonsBtns.forEach( btn => {btn.classList.remove("active__season")});
        if(!seasonBtn.classList.contains("active__season")) seasonBtn.classList.add("active__season");
    })
});
/* ------------------------------Активная кнопка сезона и фотографии------------------------------ */

/* ------------------------------Текущий язык------------------------------ */
let activeLanguage;

languages.forEach(activeLang => {
    activeLang.addEventListener('click', () => {
        languages.forEach( lang => lang.classList.remove("active__language"));
        if(!activeLang.classList.contains("active__language")) activeLang.classList.add("active__language");

        if(document.querySelector('.ru-language').classList.contains('active__language')) activeLanguage = "ru";
        else activeLanguage = "en";
        translateSite(activeLanguage); 
    })
});

function translateSite(activeLanguage){  
    document.querySelectorAll('[data-i18n]').forEach(node => {
        node.textContent = i18Obj[activeLanguage][node.dataset.i18n];
    });
}
/* ------------------------------Текущий язык------------------------------ */

/* ------------------------------Работа с сайдбаром------------------------------ */
function closeSidebar(){
    sideMenu.classList.remove('active__side-menu');
    container.classList.remove('active__side-menu');
}

burger.onclick = () => {
    sideMenu.classList.add('active__side-menu');
    container.classList.add('active__side-menu');
}

cross.onclick = closeSidebar;
sidebarsLinks.forEach(link => link.onclick = closeSidebar);
/* ------------------------------Работа с сайдбаром------------------------------ */