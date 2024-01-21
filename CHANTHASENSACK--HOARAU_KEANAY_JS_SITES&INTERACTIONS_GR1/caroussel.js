document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper(".isaaco", {
        navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
        },
        pagination: {
        el : ".swiper-pagination",
        },
        autoplay : {
            delay : 3000
        }
    })
})