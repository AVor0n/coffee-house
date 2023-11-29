const menuLink = document.querySelector('#menu-link');
const isMenuPage = /menu(?:\.html)?$/u.test(window.location.pathname);

if (isMenuPage) {
  menuLink?.classList.add('active');
} else {
  menuLink?.classList.remove('active');
}
