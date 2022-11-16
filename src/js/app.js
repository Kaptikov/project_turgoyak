import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
  Controller,
} from 'swiper'

let swiper1 = new Swiper('.main__swiper', {
  modules: [Navigation, Pagination, EffectFade],
  // Optional parameters
  loop: true,
  slidesPerView: 1,

  speed: 800,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // spaceBetween: 10,
  // allowTouchMove: false,
  // loopedSlides: 3,

  // effect: 'fade',

  // fadeEffect: {
  //   crossFade: true,
  // },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
})

let swiper2 = new Swiper('.first__swiper', {
  modules: [Navigation, Controller],
  // Optional parameters
  loop: true,

  speed: 1000,

  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  controller: {
    control: swiper1,
  },
})

let swiper3 = new Swiper('.immovables__swiper', {
  modules: [Navigation],
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  direction: 'horizontal',

  speed: 800,

  spaceBetween: 23,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      loop: false,
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 44,
    },
    // when window width is >= 480px
    // 480: {
    //   slidesPerView: 2,
    //   spaceBetween: 30
    // },
    // when window width is >= 640px
    524: {
      slidesPerView: 2,
      spaceBetween: 42,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 42,
    },
  },
})

const burger = document?.querySelector('[data-burger]')
const burgerBtn = document?.querySelector('[data-burger__btn]')
const menu = document?.querySelector('[data-menu]')
const logo = document?.querySelector('[data-logo]')
const menuTxt = document?.querySelector('[data-menuTxt]')
const menuItems = menu?.querySelectorAll('a')
const body = document.body

burgerBtn?.addEventListener('click', () => {
  body.classList.toggle('stop--scroll')
  burger?.classList.toggle('burger--active')
  burgerBtn?.classList.toggle('burger__btn--active')
  menu?.classList.toggle('header__container-second--visible')
  logo?.classList.toggle('burger-menu__logo--visible')

  if (burger.classList.contains('burger--active')) {
    menuTxt.innerHTML = 'Закрыть'
  } else {
    menuTxt.innerHTML = 'Меню'
  }
})

// burger?.addEventListener('click', () => {
//   body.classList.toggle('stop--scroll')
//   burger?.classList.toggle('burger--active')
//   menu?.classList.toggle('header__menu--hidden')
//   if (burger.classList.contains('burger--active')) {
//     menuTxt.innerHTML = 'Закрыть'
//   } else {
//     menuTxt.innerHTML = 'Меню'
//   }
// })

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop--scroll')
    burger?.classList.remove('burger--active')
    menu?.classList.remove('header__container-second--visible')
  })
})
