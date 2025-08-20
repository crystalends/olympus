document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.header__burger-button');
    const menu = document.querySelector('.menu');

    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('active');

        if (menu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !burgerBtn.contains(e.target)) {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
