document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.accordion__item');

    items.forEach(item => {
        const header = item.querySelector('.accordion__header');

        header.addEventListener('click', () => {
            items.forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                }
            });

            item.classList.toggle('open');
        });
    });
});
