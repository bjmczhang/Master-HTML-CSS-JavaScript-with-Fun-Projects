const instBtn = document.querySelector('#instantly');
const result = document.querySelector('.result h1');
const startStop = document.querySelector('#start-stop');
let timerId = null;

function randomNum() {
  let min = document.querySelector('#min');
  let max = document.querySelector('#max');
  let minValue = Number(min.value);
  let maxValue = Number(max.value);

  if (minValue > maxValue) {
    [minValue, maxValue] = [maxValue, minValue];
    min.value = minValue;
    max.value = maxValue;
  }

  const num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  result.innerHTML = num;
  result.classList.add('active');
}

instBtn.addEventListener('click', randomNum);

function startGenerating() {
  timerId = setInterval(randomNum, 100);
}

function stopGenerating() {
  clearInterval(timerId);
  timerId = null;
}

startStop.addEventListener('click', () => {
  if (!timerId) {
    startGenerating();
    startStop.childNodes[2].nodeValue = 'Stop Generating';
    startStop.style.backgroundColor = 'var(--secondary-clr)';
    startStop.style.borderColor = 'var(--secondary-clr)';
  } else {
    stopGenerating();
    startStop.childNodes[2].nodeValue = 'Start Generating';
    startStop.style.backgroundColor = 'var(--white)';
    startStop.style.borderColor = 'var(--primary-clr)';
  }
});
