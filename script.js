const seasonsBtns = document.querySelectorAll('.season__btn');
const languages = document.querySelectorAll('.header__navbar-language span');

seasonsBtns.forEach(seasonBtn => {
    seasonBtn.addEventListener('click', () => {
        seasonsBtns.forEach( btn => {btn.classList.remove("active__season")});
        if(!seasonBtn.classList.contains("active__season")) seasonBtn.classList.add("active__season");
    })
});

languages.forEach(activeLang => {
    activeLang.addEventListener('click', () => {
        languages.forEach( lang => {lang.classList.remove("active__language")});
        if(!activeLang.classList.contains("active__language")) activeLang.classList.add("active__language");
    })
});