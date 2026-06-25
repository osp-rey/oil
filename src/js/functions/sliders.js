export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      speed: 900,
      spaceBetween: 20,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true,
      },
    });
  }

  const produtsSlider = document.querySelector(".s-products__slider");

  if (produtsSlider) {
    const swiper = new Swiper(produtsSlider, {
      speed: 900,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 5500,
      },
      navigation: {
        prevEl: ".s-products .slider-arrow._prev",
        nextEl: ".s-products .slider-arrow._next",
      },
      scrollbar: {
        el: ".s-products .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1366: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
        1200: {
          spaceBetween: 25,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
    });
  }

  const gallerySlider = document.querySelector(".s-gallery__slider");

  if (gallerySlider) {
    const swiper = new Swiper(gallerySlider, {
      speed: 900,
      spaceBetween: 20,
      slidesPerView: "auto",
      // autoplay: {
      //   delay: 6000,
      // },
      navigation: {
        prevEl: ".s-gallery .slider-arrow._prev",
        nextEl: ".s-gallery .slider-arrow._next",
      },
      scrollbar: {
        el: ".s-gallery .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 25,
          slidesPerView: "auto",
        },
      },
    });
  }
}
