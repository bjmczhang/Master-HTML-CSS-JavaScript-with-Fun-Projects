const items = document.querySelectorAll('.menu-item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');
  });
});

function removeActive() {
  items.forEach((item) => {
    item.classList.remove('active');
  });
}

const menu = document.querySelector('.menu-icon');
const nav = document.querySelector('.navigation');

menu.addEventListener('click', () => {
  nav.classList.toggle('change');
});
