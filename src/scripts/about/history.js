document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-history]").forEach((historyBlock) => {
        const timeline = historyBlock.querySelector(".timeline");
        const points = timeline ? timeline.querySelectorAll(".timeline__point") : [];
        const cards = historyBlock.querySelectorAll(".lined-history[data-year]");

        points.forEach((point) => {
            point.addEventListener("click", () => {
                const yearEl = point.querySelector(".timeline__year");
                const year = yearEl ? yearEl.textContent.trim() : "";

                // Убираем активный класс у всех точек и годов
                points.forEach((p) => {
                    p.classList.remove("timeline__point--active");
                    const y = p.querySelector(".timeline__year");
                    if (y) y.classList.remove("timeline__year--active");
                });

                // Убираем активный класс у всех карточек
                cards.forEach((c) => c.classList.remove("lined-history--active"));

                // Делаем текущую точку и год активными
                point.classList.add("timeline__point--active");
                if (yearEl) yearEl.classList.add("timeline__year--active");

                // Делаем активными все карточки с выбранным годом
                const activeCards = historyBlock.querySelectorAll(`.lined-history[data-year="${year}"]`);
                activeCards.forEach(card => card.classList.add("lined-history--active"));
            });
        });
    });
});
