// HTML DOM 요소 가져오기
const nameInput = document.getElementById("name");
const majorInput = document.getElementById("major");
const departmentInput = document.getElementById("department");
const githubInput = document.getElementById("github-address");
const instagramInput = document.getElementById("instagram-address");
const cardContainer = document.querySelector(".card-container");
const uploadBtn = document.getElementById('upload-btn');


// ADD 버튼 클릭 시 실행되는 함수
function createCard() {
event.preventDefault();
  // 사용자가 입력한 정보 가져오기
  const name = nameInput.value;
  const major = majorInput.value;
  const department = departmentInput.value;
  const github = githubInput.value;
  const instagram = instagramInput.value;



  


  // 명함 생성
  const card = document.createElement("div");
  card.classList.add("card");

  const nameElement = document.createElement("p");
  nameElement.textContent = name;
  card.appendChild(nameElement);

  const majorElement = document.createElement("p");
  majorElement.textContent = major;
  card.appendChild(majorElement);

  const departmentElement = document.createElement("p");
  departmentElement.textContent = department;
  card.appendChild(departmentElement);

  const githubElement = document.createElement("p");
  githubElement.textContent = github;
  card.appendChild(githubElement);

  const instagramElement = document.createElement("p");
  instagramElement.textContent = instagram;
  card.appendChild(instagramElement);


  

  // 명함 컨테이너에 추가
  const cardContainer = document.querySelector('.card-container');
  cardContainer.appendChild(card);
}

function selectImage() {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const profileImage = document.createElement("div");
        profileImage.className = "profile-image";
        profileImage.style.backgroundImage = `url('${reader.result}')`;
        cardLeft.appendChild(profileImage);
      };
    });
    fileInput.click();
  }

