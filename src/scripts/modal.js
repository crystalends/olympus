document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');

    buttons.forEach(button => {
        const modalId = button.dataset.modal;
        const modal = document.getElementById(modalId);
        if (!modal) return;

        button.addEventListener('click', () => {
            modal.classList.add('modal--active');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal || e.target.closest('.modal__close')) {
                modal.classList.remove('modal--active');
            }
        });
    });
});
