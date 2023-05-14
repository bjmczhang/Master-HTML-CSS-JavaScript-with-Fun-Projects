const allTabs = document.querySelectorAll('.tabs li');
const allImages = document.querySelectorAll('.images img');

function removeActive() {
  allTabs.forEach((tab) => {
    tab.classList.remove('active');
  });
  allImages.forEach((img) => {
    img.classList.remove('active');
  });
}

allTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    removeActive();
    tab.classList.add('active');
    allImages[index].classList.add('active');
    document.body.style.background = `url(./images/bg${
      index + 1
    }.jpeg) center no-repeat`;
    document.body.style.backgroundSize = 'cover';
  });
});
