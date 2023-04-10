// text Write Effect

const text = '안녕하세요✋ 개발하는 경영학부 김용민입니다.';
const textEl = document.querySelector('.text');

let idx = 1;
let speed = 200;

writeText();

function writeText() {
  //
  textEl.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

// Loading Blur Effect
const container = document.querySelector('.container');
const blurText = document.querySelector('.blurText');

let percentage = 0;
let int = setInterval(blurring, 30);

blurring();

function blurring() {
  percentage++;
  blurText.innerHTML = `${percentage}%`;
  console.log(percentage);
  if (percentage > 100) {
    clearInterval(int);
    // Loading Percantage 100될떄 삭제
    blurText.style.display = `none`;
  }
  container.style.filter = `blur(${100 - percentage}px)`;
}
