const menu = document.querySelector('.menu');
const img = document.querySelector('.container img');

img.addEventListener('contextmenu', (e) => {
  // Prevent the Default Browser Context Menu
  e.preventDefault();

  // Retrieve the Horizontal and Vertical Coordinate Positions of the Mouse Event
  let posX = e.pageX;
  let posY = e.pageY;

  // Set the Menu Position
  menu.style.left = posX + 'px';
  menu.style.top = posY + 'px';

  // Display the Hidden Menu
  menu.style.display = 'block';
});

// Click Any Place to Hide Menu Again
document.addEventListener('click', () => {
  menu.style.display = 'none';
});

// Prevent the Context When Right Click on Menu
menu.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
