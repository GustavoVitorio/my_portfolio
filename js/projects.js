const btns = document.querySelectorAll('.btn-section');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.parentElement;

        content.classList.toggle('aberto');
    });
});