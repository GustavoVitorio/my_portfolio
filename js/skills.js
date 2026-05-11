const btn_frontend = document.getElementById('frontend');
const icon_frontend = btn_frontend.querySelector('p');

const btn_backend = document.getElementById('backend');
const icon_backend = btn_backend.querySelector('p');

const btn_ferramenta = document.getElementById('ferramenta');
const icon_ferramenta = btn_ferramenta.querySelector('p');

const fundo = document.getElementById('blur');

btn_frontend.addEventListener('click', () => {
    btn_frontend.classList.toggle('active');
    icon_frontend.classList.toggle('rotate');
    fundo.classList.toggle('disable');
});

btn_backend.addEventListener('click', () => {
    btn_backend.classList.toggle('active');
    icon_backend.classList.toggle('rotate');
    fundo.classList.toggle('disable');
});

btn_ferramenta.addEventListener('click', () => {
    btn_ferramenta.classList.toggle('active');
    icon_ferramenta.classList.toggle('rotate');
    fundo.classList.toggle('disable');
});