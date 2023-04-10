const text = '안녕하세요✋ 개발공부하는 경영학부 김용민입니다.';
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
