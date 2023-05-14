const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const reset = document.querySelector('.reset');
const num = document.querySelector('#num');

btnLeft.addEventListener('click', () => {
  num.innerHTML++;
});
btnRight.addEventListener('click', () => {
  num.innerHTML--;
});
reset.addEventListener('click', () => {
  num.innerHTML = 0;
});
