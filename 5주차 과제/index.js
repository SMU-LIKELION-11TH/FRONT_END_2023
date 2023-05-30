let data = [];
let id = 0;

const showSection = () => {
  const section = document.querySelector(".content-list");
  section.style.display = "block";
};

const generate = () => {
  const name = document.getElementById("name").value;
  const job = document.getElementById("job").value;
  const education = document.getElementById("education").value;
  const github = document.getElementById("github").value;
  const instagram = document.getElementById("instagram").value;

  const backgroundColor = document.getElementById("colorpick").value;

  const newItem = {
    name: name,
    job: job,
    education: education,
    github: github,
    instagram: instagram,
    backgroundColor: backgroundColor,
    photoURL: "",
  };

  data.push(newItem);
  console.log(data);
  showData();

  document.getElementById("name").value = "";
  document.getElementById("job").value = "";
  document.getElementById("education").value = "";
  document.getElementById("github").value = "";
  document.getElementById("instagram").value = "";

  showSection();
};

const openFile = function (event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var newItem = {
      photoURL: dataURL
    };
    data.push(newItem);
    console.log(data);
    showData();
  };

  reader.readAsDataURL(input.files[0]);
};

const showData = () => {
  const contentList = document.querySelector(".content-list");
  contentList.replaceChildren();

  data.forEach((item) => {
    let div = document.createElement("div");
    div.setAttribute("class", "content");
    div.style.backgroundColor = item.backgroundColor;

    const img = document.createElement("img");
    img.id = "myImg";
    img.src = item.photoURL;
    div.appendChild(img);

    for (let key in item) {
      if (
        key !== "backgroundColor" &&
        key !== "photoURL" &&
        Object.prototype.hasOwnProperty.call(item, key)
      ) {
        const p = document.createElement("p");
        const text = document.createTextNode(`${key}: ${item[key]}`);
        p.appendChild(text);
        div.appendChild(p);
      }
    }

    contentList.appendChild(div);
  });
};







