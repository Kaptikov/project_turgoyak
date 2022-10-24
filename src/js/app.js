import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

const burger = document?.querySelector('[data-burger]')
const burgerMenu = document?.querySelector('[data-burger-menu]')
const menu = document?.querySelector('[data-menu]')
const menuTxt = document?.querySelector('[data-menuTxt]')
const menuItems = menu?.querySelectorAll('a')
const body = document.body

burgerMenu?.addEventListener('click', () => {
  body.classList.toggle('stop--scroll')
  burger?.classList.toggle('burger--active')
  menu?.classList.toggle('header__menu--hidden')
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
    menu?.classList.remove('header__menu--hidden')
  })
})
