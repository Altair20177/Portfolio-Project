import i18Obj from './translate.js';

const seasonsBtns = document.querySelectorAll('.season__btn');
const languages = document.querySelectorAll('.header__navbar-language span');

const allSeasonsButtons = document.querySelector('.seasons__btns');

const burger = document.querySelector('.burger');
const container = document.querySelector('.container');
const cross = document.querySelector('.cross');
const sidebarsLinks = document.querySelectorAll('aside a');
const sideMenu = document.querySelector('aside');

let activeLanguage;

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

languages.forEach(activeLang => {
    activeLang.addEventListener('click', () => {
        languages.forEach( lang => lang.classList.remove("active__language"));
        if(!activeLang.classList.contains("active__language")) activeLang.classList.add("active__language");

        if(document.querySelector('.ru-language').classList.contains('active__language')) activeLanguage = "ru";
        else activeLanguage = "en";
        translateSite(activeLanguage); 
    })
});



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

function translateSite(activeLanguage){  
    document.querySelectorAll('[data-i18n]').forEach(node => {
        let activeNode = node.dataset.i18n;
        node.textContent = i18Obj[activeLanguage][activeNode];
        //console.log(node.dataset.i18n); /* node.dataset.i18n.textContent = i18Obj[activeLanguage].dataset.i18n; */
    });
}