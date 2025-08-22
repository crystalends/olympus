document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".lined-history.swiper__awards").forEach((swiperEl) => {
        const year = swiperEl.getAttribute("data-year");
        if (!year) return;
        
        const controls = document.querySelector(`.slider__controls[data-year="${year}"]`);
        if (controls) {
            const prev = controls.querySelector(".swiper__control--prev");
            const next = controls.querySelector(".swiper__control--next");

            if (prev) prev.classList.add(`swiper__control--prev-${year}`);
            if (next) next.classList.add(`swiper__control--next-${year}`);
        }

        new Swiper(swiperEl, {
            slidesPerView: 3,
            spaceBetween: 40,
            navigation: {
                nextEl: `.swiper__control--next-${year}`,
                prevEl: `.swiper__control--prev-${year}`,
            },
            breakpoints: {
                320: {slidesPerView: 1, spaceBetween: 20},
                768: {slidesPerView: 2, spaceBetween: 30},
                1425: {slidesPerView: 3, spaceBetween: 40},
            },
            freeMode: true,
            freeModeMomentum: true,
            grabCursor: true,
        });
    });
});
