const button = document.getElementById('nav_bar');
const menu = document.querySelector('nav');
const seta = document.querySelector('#nav_bar img')

button.addEventListener('click', () => {
    menu.classList.toggle('expand');
    seta.classList.toggle('rotate');
});
