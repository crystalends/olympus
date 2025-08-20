document.addEventListener("DOMContentLoaded", () => {
    const historyCards = document.querySelectorAll(".history-card");

    historyCards.forEach(card => {
        const firstContent = card.querySelector(".history-card__first-content");
        const secondContent = card.querySelector(".history-card__second-content");

        const openBtn = card.querySelector(".history-card__first-content .button");
        const closeBtn = card.querySelector(".history-card__second-content .button");

        if (openBtn && closeBtn && firstContent && secondContent) {
            openBtn.addEventListener("click", () => {
                firstContent.classList.remove("history-card__first-content--visible");
                secondContent.classList.add("history-card__second-content--visible");
            });

            closeBtn.addEventListener("click", () => {
                secondContent.classList.remove("history-card__second-content--visible");
                firstContent.classList.add("history-card__first-content--visible");
            });
        }
    });
});
