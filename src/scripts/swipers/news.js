new Swiper(".swiper__news", {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper__control--next",
        prevEl: ".swiper__control--prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1425: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    freeMode: true,
    freeModeMomentum: true,
    grabCursor: true,
});