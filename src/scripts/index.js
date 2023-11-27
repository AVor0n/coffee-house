const menuLink = document.querySelector('#menu-link');
if (window.location.pathname.startsWith('/menu')) {
  menuLink?.classList.add('active');
} else {
  menuLink?.classList.remove('active');
}
