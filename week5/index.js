const contentList = document.querySelector(".content-list");
let newCards = [];
let imgSrc="";

//등록하기
function addCard(event) {
  event.preventDefault();

  const name = document.querySelector(".name");
  const major = document.querySelector(".major");
  const school = document.querySelector(".school");
  const github = document.querySelector(".github");
  const instagram = document.querySelector(".instagram");
  const bg = document.getElementById("input_color");

  const card = {
    card_name: name.value,
    card_major: major.value,
    card_school: school.value,
    card_github: github.value,
    card_instagram: instagram.value,
    card_bg: bg.value,
    card_img: imgSrc == "" ? "" : imgSrc,
  };

  newCards.push(card);


  
  //초기화 해주는 것
  name.value = "";
  major.value = "";
  school.value = "";
  github.value = "";
  instagram.value = "";
  bg.value = "#FFFFFF";

// section 화면을 초기화
contentList.replaceChildren();

// 동적으로 card 생성
newCards.forEach((card) => {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "newCard");
  newCard.style.backgroundColor = `${card.card_bg}`;

  const newCard_name = document.createElement("div");
  newCard_name.setAttribute("class", "newCard_name");
  newCard_name.innerText = card.card_name;
  newCard.append(newCard_name);

  const newCard_major = document.createElement("div");
  newCard_major.setAttribute("class", "newCard_major");
  newCard_major.innerText = card.card_major;
  newCard.append(newCard_major);

  const newCard_part = document.createElement("div");
  newCard_part.setAttribute("class", "newCard_part");
  newCard_part.innerText = card.card_school;
  newCard.append(newCard_part);

  const newCard_github = document.createElement("div");
  newCard_github.setAttribute("class", "newCard_github");
  newCard_github.innerText = card.card_github;
  newCard.append(newCard_github);

  const newCard_insta = document.createElement("div");
  newCard_insta.setAttribute("class", "newCard_insta");
  newCard_insta.innerText = card.card_instagram;
  newCard.append(newCard_insta);

  if (card.card_img != "") {
    const newCard_image = document.createElement("img");
    newCard_image.setAttribute("class", "newCard_image");
    newCard_image.src = card.card_img;
    newCard.append(newCard_image);

    //img src도 초기화 시켜줌
    imgSrc = "";
    document.getElementById("input_image").value = "";
  }

  contentList.append(newCard);
});
};
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




 

  
  
