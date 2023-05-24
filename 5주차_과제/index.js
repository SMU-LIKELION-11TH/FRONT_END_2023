let data = [];
let selectedColor = '#ffffff';
let Img = "";
var dataURL = "";



var openFile = (event) => {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function() {
    dataURL = reader.result;
  };
  reader.readAsDataURL(input.files[0]);
};

//명함 등록하기
const submit = () => {
  const name = document.getElementById("name").value;
  const part = document.getElementById("part").value;
  const school = document.getElementById("school").value;
  const github = document.getElementById("github").value;
  const instagram = document.getElementById("instagram").value;
  const color = document.getElementById("selectedColor").value;
  

  const newItem = {
    name: name,
    part: part,
    school: school,
    github: github,
    instagram: instagram,
    imgURL: dataURL,
    color,
  };

  

  data.push(newItem);

  console.log(data);

  showData();
 

  document.getElementById("name").value = "";
  document.getElementById("part").value = "";
  document.getElementById("school").value = "";
  document.getElementById("github").value = "";
  document.getElementById("instagram").value = "";
}; 

const showData = () => {
  var color = document.getElementById("selectedColor").value;
  
  const contentList = document.querySelector(".content-list");
  contentList.replaceChildren();
  
  
  data.forEach((item) =>{
    let div = document.createElement("div");
    div.setAttribute("class", "content");
    contentList.appendChild(div);
    div.style.backgroundColor = item.color;

    const img = document.createElement("img");
    img.id = "cardImg";
    img.src = item.imgURL;
    div.appendChild(img);

    for(let key in item) {
      console.log(key);

      if ((key !== "color") && (key !== "imgURL")) {
        const p = document.createElement("p");
        const text = document.createTextNode(`${item[key]}`);
        
        p.appendChild(text);
        div.appendChild(p);
      } 
      
    }
  });
};


