const cardTop = document.querySelector('.card-top'),
  original = document.querySelector('.original'),
  strawberry = document.querySelector('.strawberry'),
  chocolate = document.querySelector('.chocolate'),
  igdSugar = document.querySelector('.igd-sugar h2'),
  igdSalt = document.querySelector('.igd-salt h2'),
  igdFat = document.querySelector('.igd-fat h2'),
  igdEnergy = document.querySelector('.igd-energy h2'),
  details = document.querySelector('.details p'),
  imgOrig = document.querySelector('.img-orig'),
  imgStraw = document.querySelector('.img-straw'),
  imgChoc = document.querySelector('.img-choc');

original.addEventListener('click', () => {
  cardTop.style.background = 'var(--bg-orig)';
  original.style.background = 'var(--bg-orig)';
  strawberry.style.background = 'none';
  chocolate.style.background = 'none';
  igdSugar.innerHTML = '3%';
  igdSalt.innerHTML = '5%';
  igdFat.innerHTML = '6%';
  igdEnergy.innerHTML = '30%';
  details.innerHTML =
    "We've perfected this recipe so every time you bite into it, the tasting is more than just a donut - it's pure joy.";
  imgOrig.style.left = '6rem';
  imgStraw.style.left = '-45rem';
  imgChoc.style.left = '-45rem';
});

strawberry.addEventListener('click', () => {
  cardTop.style.background = 'var(--bg-straw)';
  strawberry.style.background = 'var(--bg-straw)';
  original.style.background = 'none';
  chocolate.style.background = 'none';
  igdSugar.innerHTML = '4%';
  igdSalt.innerHTML = '3%';
  igdFat.innerHTML = '5%';
  igdEnergy.innerHTML = '28%';
  details.innerHTML =
    "We've taken our Original Donut, hand-dipped it in a strawberry truffle and topped it with fun rainbow sprinkles!";
  imgOrig.style.left = '-45rem';
  imgStraw.style.left = '6rem';
  imgChoc.style.left = '-45rem';
});

chocolate.addEventListener('click', () => {
  cardTop.style.background = 'var(--bg-choc)';
  chocolate.style.background = 'var(--bg-choc)';
  original.style.background = 'none';
  strawberry.style.background = 'none';
  igdSugar.innerHTML = '5%';
  igdSalt.innerHTML = '2%';
  igdFat.innerHTML = '8%';
  igdEnergy.innerHTML = '22%';
  details.innerHTML =
    "We took our classic ring donut, dipped it in truffle, topped it with chocolate buttons. It's time you said YES.";
  imgOrig.style.left = '-45rem';
  imgStraw.style.left = '-45rem';
  imgChoc.style.left = '6rem';
});

window.addEventListener('DOMContentLoaded', () => {
  chocolate.click();
});
