const navigation_alias = document.querySelector('.navigation');

window.onscroll = () => {
    if (window.scrollY > 1) {
        navigation_alias.classList.add('nav-scrolled');
    } else {
        navigation_alias.classList.remove('nav-scrolled');
    }
};
