document.addEventListener("DOMContentLoaded", () => {
    const customSelect = document.querySelector(".select");
    const trigger = customSelect.querySelector(".select__trigger");
    const triggerOption = customSelect.querySelector(".select__trigger-option");
    const options = customSelect.querySelectorAll(".select__option");

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        customSelect.classList.toggle("open");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            triggerOption.textContent = option.textContent;
            customSelect.classList.remove("open");
        });
    });

    document.addEventListener("click", () => {
        customSelect.classList.remove("open");
    });
});
