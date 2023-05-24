let abc = "";

const newcard = {
  name: "",
  job: "",
  workin: "",
  githublink: "",
  instagramlink: "",
};

const fileDOM = document.getElementById("AddPicture");
const preview = document.querySelector(".image_box"); //addpicture는 id
const contentList = document.querySelector(".createcard");

fileDOM.addEventListener("change", () => {
  const reader = new FileReader();
  reader.onload = ({ target }) => {
    abc = target.result;
    console.log(AddPicture);
  };
  reader.readAsDataURL(fileDOM.files[0]);
});

//input 등록하기
function handleSubmit(event) {
  console.log("submit");
  event.preventDefault();
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;
  const workin = document.getElementById("workin").value;
  const githublink = document.getElementById("githublink").value;
  const instagramlink = document.getElementById("instagramlink").value;
  newcard.name = name;
  newcard.job = job;
  newcard.workin = workin;
  newcard.githublink = githublink;
  newcard.instagramlink = instagramlink;

  showData();

  document.getElementById("name").value = "";
  document.getElementById("job").value = "";
  document.getElementById("workin").value = "";
  document.getElementById("githublink").value = "";
  document.getElementById("instagramlink").value = "";
  console.log("submit");
}

//data 배열에 담긴 객체 모두 보여주기
const showData = () => {
  console.log("showdata");
  let NewBusinesscard = document.createElement("div");
  NewBusinesscard.setAttribute("class", "NewBusinesscard");

  let leftBox = document.createElement("div");
  leftBox.setAttribute("class", "left");

  let rightBox = document.createElement("div");
  rightBox.setAttribute("class", "right");

  let image_box = document.createElement("img");
  image_box.setAttribute("class", "image_box");
  image_box.src = abc;

  let name = document.createElement("h2");
  name.setAttribute("class", "div");
  name.innerText = newcard.name;

  let job = document.createElement("p");
  job.setAttribute("class", "job");
  job.innerText = newcard.job;

  let workin = document.createElement("p");
  workin.setAttribute("class", "workin");
  workin.innerText = newcard.workin;

  let githublink = document.createElement("p");
  githublink.setAttribute("class", "githublink");
  githublink.innerText = newcard.githublink;

  let instagram = document.createElement("p");
  instagram.setAttribute("class", "instagram");
  instagram.innerText = newcard.instagramlink;

  leftBox.appendChild(image_box);
  leftBox.appendChild(name);

  rightBox.appendChild(job);
  rightBox.appendChild(workin);
  rightBox.appendChild(githublink);
  rightBox.appendChild(instagram);

  NewBusinesscard.appendChild(leftBox);
  NewBusinesscard.appendChild(rightBox);
  contentList.appendChild(NewBusinesscard);
  console.log("hi");
};
