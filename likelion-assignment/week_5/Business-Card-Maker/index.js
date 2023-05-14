

const nameSpace = document.getElementById('name');
const occuSpace = document.getElementById('occupation');
const eduSpace = document.getElementById('education');
const gitSpace = document.getElementById('github-url');
const igSpace = document.getElementById('instagram-url');

const colorPicker = document.getElementById('color-picker');
const colorShower = document.getElementById('color-shower');
const photoPicker = document.getElementById('photo-picker');

const colorSelectBtn = document.getElementById('color-button');
const photoSelectBtn = document.getElementById('photo-button');
const genBtn = document.getElementById('generate-button');

const cardArea = document.querySelector('.card-area');

let currentColor = '#ffffff';
let currentImg = ''

function checkIsAnySpaceEmpty() {
  if ((nameSpace.value === '') ||
  (occuSpace.value === '') ||
  (eduSpace.value === '') ||
  (gitSpace.value === '') ||
  (igSpace.value === '')) {
    return true;
  } else return false;
}

function changeSelectedBgColor(event) {
  currentColor = event.target.value;
  colorShower.style.backgroundColor = currentColor;
}

function changeImage(event) {
  currentImg = event.target.files[0];
}

function generateCard() {
  if (checkIsAnySpaceEmpty()) {
    alert('다섯 개의 필드를 모두 채우십시오.');
  } else {
    let divCard = document.createElement('div');
    let divLeftSide = document.createElement('div');
    let divRightSide = document.createElement('div');
    let profileImg = document.createElement('img');
    let nameTag = document.createElement('h1');
    let mainP = document.createElement('p');
    let eduP = document.createElement('p');
    let gitP = document.createElement('p');
    let igP = document.createElement('p');
    let eduI = document.createElement('i');
    let gitI = document.createElement('i');
    let igI = document.createElement('i');
    let eduSpan = document.createElement('span');
    let gitSpan = document.createElement('span');
    let igSpan = document.createElement('span');

    divCard.classList.add('card');
    divLeftSide.classList.add('left-side');
    divRightSide.classList.add('right-side');
    profileImg.classList.add('profile-image');
    eduI.classList.add('fa-solid', 'fa-building');
    gitI.classList.add('fa-brands', 'fa-github');
    igI.classList.add('fa-brands', 'fa-instagram');

    divCard.style.backgroundColor = currentColor;
    profileImg.src = URL.createObjectURL(currentImg);
    nameTag.innerText = nameSpace.value;
    mainP.innerText = occuSpace.value;
    eduSpan.innerText = eduSpace.value;
    gitSpan.innerText = gitSpace.value;
    igSpan.innerText = igSpace.value;

    eduP.append(eduI, eduSpan);
    gitP.append(gitI, gitSpan);
    igP.append(igI, igSpan);
    divLeftSide.append(profileImg, nameTag);
    divRightSide.append(mainP, eduP, gitP, igP);
    divCard.append(divLeftSide, divRightSide);

    cardArea.appendChild(divCard);

    nameSpace.value = '';
    occuSpace.value = '';
    eduSpace.value = '';
    gitSpace.value = '';
    igSpace.value = '';
  }
}

colorPicker.addEventListener('change', changeSelectedBgColor);
photoPicker.addEventListener('change', changeImage);

colorSelectBtn.addEventListener('click', () => {
  colorPicker.click();
});
photoSelectBtn.addEventListener('click', () => {
  photoPicker.click();
});
genBtn.addEventListener('click', generateCard);
