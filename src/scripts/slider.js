document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-slider]").forEach(slider => {
        const leftBtn = slider.querySelector("[data-slider-left]");
        const rightBtn = slider.querySelector("[data-slider-right]");

        let activeViewport = slider.querySelector("[data-slider-viewport]");

        const getItems = () => Array.from(activeViewport.querySelectorAll("[data-slider-item]") || []);

        const updateButtons = () => {
            if (!activeViewport || !leftBtn || !rightBtn) return;
            const scrollLeft = activeViewport.scrollLeft;
            const maxScroll = activeViewport.scrollWidth - activeViewport.clientWidth;
            leftBtn.style.display = scrollLeft > 0 ? "flex" : "none";
            rightBtn.style.display = scrollLeft < maxScroll ? "flex" : "none";
        };

        const scrollToItem = el => {
            if (!activeViewport || !el) return;
            const targetLeft = el.getBoundingClientRect().left - activeViewport.getBoundingClientRect().left + activeViewport.scrollLeft;
            activeViewport.scrollTo({left: targetLeft, behavior: "smooth"});
            setTimeout(updateButtons, 300);
        };

        const currentIndex = () => {
            if (!activeViewport) return 0;
            const items = getItems();
            if (!items.length) return 0;
            const leftEdge = activeViewport.getBoundingClientRect().left;
            let nearest = 0, minDist = Infinity;
            items.forEach((el, i) => {
                const dist = Math.abs(el.getBoundingClientRect().left - leftEdge);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = i;
                }
            });
            return nearest;
        };

        const addScrollListener = () => {
            if (!activeViewport) return;
            activeViewport.addEventListener("scroll", updateButtons, {passive: true});
        };

        const removeScrollListener = () => {
            if (!activeViewport) return;
            activeViewport.removeEventListener("scroll", updateButtons);
        };

        leftBtn?.addEventListener("click", () => {
            const items = getItems();
            const i = currentIndex();
            const next = Math.max(i - 1, 0);
            scrollToItem(items[next]);
        });

        rightBtn?.addEventListener("click", () => {
            const items = getItems();
            const i = currentIndex();
            const next = Math.min(i + 1, items.length - 1);
            scrollToItem(items[next]);
        });

        window.addEventListener("resize", updateButtons, {passive: true});

        addScrollListener();
        updateButtons();
        
        slider.querySelectorAll(".timeline__point").forEach(point => {
            point.addEventListener("click", () => {
                const year = point.querySelector(".timeline__year")?.textContent.trim();
                if (!year) return;

                slider.querySelectorAll(".lined-history").forEach(c =>
                    c.classList.toggle("lined-history--active", c.dataset.year === year)
                );

                removeScrollListener();

                activeViewport = slider.querySelector(".lined-history--active [data-slider-viewport]") || slider.querySelector("[data-slider-viewport]");

                addScrollListener();

                if (activeViewport) activeViewport.scrollTo({left: 0, behavior: "smooth"});

                setTimeout(updateButtons, 100);
            });
        });
    });
});
