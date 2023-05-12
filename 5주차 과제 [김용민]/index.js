const createCard = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const occupationInput = document.getElementById('occupation');
  const majorInput = document.getElementById('major');
  const githubInput = document.getElementById('github');
  const instagramInput = document.getElementById('instagram');
  const bgColorInput = document.getElementById('bgColor');
  const photoInput = document.getElementById('photo');

  const name = nameInput.value;
  const occupation = occupationInput.value;
  const major = majorInput.value;
  const github = githubInput.value;
  const instagram = instagramInput.value;
  const bgColor = bgColorInput.value || '#FFFFFF'; // 흰색을 기본 배경색으로 설정
  const photo = photoInput.files[0];

  //  FileReader 인터넷 API 파일 읽어올 수 있음.
  const reader = new FileReader();
  // reader.onload로 url을 받아옴 파일의
  reader.onload = function () {
    const photoUrl = reader.result || ''; // 빈 사진을 기본값으로 설정

    const cardContainer = document.querySelector('.card__container');

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = bgColor;

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('card__container__img');

    const img = document.createElement('img');
    img.src = photoUrl;
    img.alt = 'Profile Photo';
    img.classList.add('profile');

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;

    imgContainer.appendChild(img);
    imgContainer.appendChild(nameHeading);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('card__container__description');

    const occupationHeading = document.createElement('h3');
    occupationHeading.textContent = occupation;

    const majorParagraph = document.createElement('p');
    majorParagraph.innerHTML = `<i class="fa-solid fa-school"></i> ${major}`;

    const githubParagraph = document.createElement('p');
    githubParagraph.innerHTML = `<i class="fa-brands fa-github"></i> ${github}`;

    const instagramParagraph = document.createElement('p');
    instagramParagraph.innerHTML = `<i class="fa-brands fa-instagram"></i> ${instagram}`;

    descriptionContainer.appendChild(occupationHeading);
    descriptionContainer.appendChild(majorParagraph);
    descriptionContainer.appendChild(githubParagraph);
    descriptionContainer.appendChild(instagramParagraph);

    card.appendChild(imgContainer);
    card.appendChild(descriptionContainer);

    cardContainer.appendChild(card);

    // 색상과 파일 초기화
    bgColorInput.value = '';
    photoInput.value = '';

    // 입력 창 초기화
    nameInput.value = '';
    occupationInput.value = '';
    majorInput.value = '';
    githubInput.value = '';
    instagramInput.value = '';
  };

  if (photo) {
    reader.readAsDataURL(photo);
  } else {
    reader.onload(); // 사진이 없을 경우에도 카드 생성
  }
};
