const section = document.querySelector(".newCard_section");

const iconSchool = document.createElement("i");
iconSchool.classList.add("fas", "fa-building");
const iconGithub = document.createElement("i");
iconGithub.classList.add("fab", "fa-github-square");
const iconInstagram = document.createElement("i");
iconInstagram.classList.add("fab", "fa-instagram-square");

let newCards = [];
let imgSrc = "";

function addCard(event) {
  event.preventDefault();
  const name = document.querySelector(".name");
  const major = document.querySelector(".major");
  const school = document.querySelector(".school");
  const github = document.querySelector(".github");
  const instagram = document.querySelector(".instagram");
  const color = document.getElementById("input_color");

  // 입력이 안된 칸이 있을 때의 에러처리
  if (
    name.value == "" ||
    major.value == "" ||
    school.value == "" ||
    github.value == "" ||
    instagram.value == ""
  ) {
    alert("모든 칸을 입력해주세요.");
    return false;
  }

  const card = {
    card_name: name.value,
    card_major: major.value,
    card_school: school.value,
    card_github: github.value,
    card_instagram: instagram.value,
    card_color: color.value,
    card_img: imgSrc == "" ? "" : imgSrc,
  };

  newCards.push(card);

  //ui 초기화
  name.value = "";
  major.value = "";
  school.value = "";
  github.value = "";
  instagram.value = "";
  color.value = "#ffc0cb";

  //secton 화면 초기화
  section.replaceChildren();
  newCards.forEach((card) => {
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "newCard");
    newCard.style.backgroundColor = `${card.card_color}`;

    if (card.card_img != "") {
      const newCard_img = document.createElement("img");
      newCard_img.setAttribute("class", "newCard_img");
      newCard_img.src = card.card_img;
      newCard.append(newCard_img);

      imgSrc = "";
      document.getElementById("input_image").value = "";
    }

    const newCard_name = document.createElement("div");
    newCard_name.setAttribute("class", "newCard_name");
    newCard_name.innerText = card.card_name;
    newCard.appendChild(newCard_name);

    const newCard_group = document.createElement("div");
    newCard_group.setAttribute("class", "newCard_group");

    const newCard_major = document.createElement("div");
    newCard_major.setAttribute("class", "newCard_major");
    newCard_major.innerText = card.card_major;
    newCard_group.appendChild(newCard_major);

    const newCard_school = document.createElement("div");
    newCard_school.setAttribute("class", "newCard_school");
    newCard_school.appendChild(iconSchool);
    newCard_school.innerHTML += " " + card.card_school;
    newCard_group.appendChild(newCard_school);

    const newCard_github = document.createElement("div");
    newCard_github.setAttribute("class", "newCard_github");
    newCard_github.appendChild(iconGithub);
    newCard_github.innerHTML += " " + card.card_github;
    newCard_group.appendChild(newCard_github);

    const newCard_instagram = document.createElement("div");
    newCard_instagram.setAttribute("class", "newCard_instagram");
    newCard_instagram.appendChild(iconInstagram);
    newCard_instagram.innerHTML += " " + card.card_instagram;
    newCard_group.appendChild(newCard_instagram);

    newCard.appendChild(newCard_group);
    section.appendChild(newCard);
  });
}

//이미지 업로드 버튼 눌렀을 때 호출되는 함수
document
  .getElementById("input_image")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      imgSrc = event.target.result;
    };

    reader.readAsDataURL(file);
  });
