function toggleMenu() {
  const Menu = document.getElementById('navigation');
  Menu.classList.toggle('container');
}

function closeMenu() {
  const CloseMenu = document.getElementById('navigation');
  CloseMenu.classList.remove('container');
}