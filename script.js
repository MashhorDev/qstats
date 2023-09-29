document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code here
    const burgerMenu = document.querySelector('.burger-menu');
    const navi = document.querySelector('.navi');

    burgerMenu.addEventListener('click', () => {
        navi.classList.toggle('nav-active');
    });
});
