let data = [];
var imageURL="";

// 이미지
// var openFile = function(event) {
//   var input = event.target;
//   var reader = new FileReader();
//   reader.onload = function(){
//     var dataURL = reader.result;

//     var output = document.getElementById('output');
//     output.src = dataURL;


//     var imgElement = document.querySelector('.img');
//     imgElement.style.backgroundImage = "url('" + dataURL + "')";
//   };
//   reader.readAsDataURL(input.files[0]);
//   imageURL = input.files[0];
// };

var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    imageURL = reader.result;
  };
  reader.readAsDataURL(input.files[0]);
};



const btn = document.querySelector("#btn");

function onClick(event){
  btn.classList.add("hidden");
  new_btn.classList.remove("hidden");
}
btn.addEventListener("click", onClick);



const submit = () => {


  const name = document.getElementById("name").value;
  const front = document.getElementById("front").value;
  const school = document.getElementById("school").value;
  const github = document.getElementById("github").value;
  const instagram = document.getElementById("instagram").value;
  const color = document.getElementById("input_color").value;
  const img = document.getElementById("output");

  const newItem = {
    name : name,
    front : front,
    school : school,
    github : github,
    instagram : instagram,
    background : color,
    img : imageURL,
  };

  data.push(newItem);

  console.log(data);
  
  showData();

  document.getElementById("name").value = "";
  document.getElementById("front").value = "";
  document.getElementById("school").value = "";
  document.getElementById("github").value = "";
  document.getElementById("instagram").value = "";


};

const showData = () => {
  
  const contentList = document.querySelector(".content-list");
  contentList.replaceChildren();

  data.forEach((item) => {


    let comment = document.createElement("div");
    comment.setAttribute("class", "comment");
    comment.style.backgroundColor = item.background;
    contentList.appendChild(comment);


    const img = document.createElement("img");
    img.setAttribute("class", "img");
    img.src = item.img;
    comment.appendChild(img);

    const box = document.createElement("div");
    box.setAttribute("class", "box");
    comment.appendChild(box);

    const name = document.createElement("div");
    name.setAttribute("class", "name");
    name.textContent = item.name;
    box.appendChild(name);

    const front = document.createElement("div");
    front.setAttribute("class", "front");
    front.textContent = item.front;
    box.appendChild(front);

    const school = document.createElement("div");
    school.setAttribute("class", "school");
    school.textContent = item.school;
    box.appendChild(school);

    const github = document.createElement("div");
    github.setAttribute("class", "github");
    github.textContent = item.github;
    box.appendChild(github);

    const instagram = document.createElement("div");
    instagram.setAttribute("class", "instagram");
    instagram.textContent = item.instagram;
    box.appendChild(instagram);


    console.log(item.background);

  });
  
  

    
  
};
