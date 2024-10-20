const burgerMenuBtn = document.querySelector('.header__right-menu--menu');
const burgerMenuElement = document.querySelector('.burger-menu');
const closeMenuElement = document.querySelector('.close-menu');

burgerMenuBtn.addEventListener('click', () => {
  setTimeout(() => {
    burgerMenuElement.style.display = 'block';
    burgerMenuElement.style.animation = '1s showMenu ease-in-out forwards'
  }, 500);

  closeMenuElement.addEventListener('click', () => {
    burgerMenuElement.style.animation = '2s closeMenu ease-in-out forwards';
  })
});

