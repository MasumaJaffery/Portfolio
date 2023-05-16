function toggle() {
  const toggle = document.getElementById('navigation');
  toggle.classList.toggle('container');
}

function close() {
  const close = document.getElementById('navigation');
  close.classList.remove('container');
}

function itemMenu() {
  const Navitem = document.getElementById('navigation');
  Navitem.classList.remove('container');
}