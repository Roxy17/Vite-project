
import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    speed: 1500,
    longSwipesMs: 1000
  });

