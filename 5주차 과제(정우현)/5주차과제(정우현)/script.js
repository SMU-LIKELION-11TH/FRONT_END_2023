const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const partInput = document.getElementById("part");
const majorInput = document.getElementById("major");
const githubInput = document.getElementById("github");
const instagramInput = document.getElementById("instagram");
const cardContainer = document.querySelector(".card-container");
const colorPicker = document.getElementById("color-picker");

// 폼 초기화
form.reset();

// 입력 받은 정보를 기반으로 명함 생성
function generateCard() {
    // 입력값 가져오기
    const name = nameInput.value;
    const part = partInput.value;
    const major = majorInput.value;
    const github = githubInput.value;
    const instagram = instagramInput.value;
    const color = colorPicker.value;

    // 명함 생성
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = color;

    const photo = document.createElement("img");
    photo.id = "photo-output";
    photo.style.width = "100px";
    photo.style.height = "100px";
    photo.style.margin = "10px";
    photo.src = URL.createObjectURL(document.getElementById("file-input").files[0]);

    const cardInfo = document.createElement("div");
    cardInfo.style.display = "inline-block";
    cardInfo.style.padding = "10px";

    const nameElement = document.createElement("h1");
    nameElement.id = "name-output";
    nameElement.innerText = name;

    const partElement = document.createElement("p");
    partElement.id = "part-output";
    partElement.innerText = part;

    const majorElement = document.createElement("p");
    majorElement.id = "major-output";
    majorElement.innerText = major;

    const githubElement = document.createElement("a");
    githubElement.id = "github-output";
    githubElement.href = `https://github.com/${github}`;
    githubElement.innerText = github;

    const instagramElement = document.createElement("a");
    instagramElement.id = "instagram-output";
    instagramElement.href = `https://instagram.com/${instagram}`;
    instagramElement.innerText = instagram;

    cardInfo.appendChild(nameElement);
    cardInfo.appendChild(partElement);
    cardInfo.appendChild(majorElement);
    cardInfo.appendChild(githubElement);
    cardInfo.appendChild(document.createElement("br"));
    cardInfo.appendChild(instagramElement);

    card.appendChild(photo);
    card.appendChild(cardInfo);

    cardContainer.appendChild(card);

    // 폼 초기화
    form.reset();
}
