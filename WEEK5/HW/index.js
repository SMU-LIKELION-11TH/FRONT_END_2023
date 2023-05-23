let data = [];
let data_img = [];

const obj = {
  imageSrc: "",
};



function loadFile(event) {
  console.log("파일로드");
  var reader = new FileReader();
  for (var image of event.target.files) { 
    reader.onload = function(event){
      const imageSrc = event.target.result;
      obj.imageSrc = imageSrc;
    };
    data_img.push(event.target.file);
    console.log(event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);
  }
}

const submit  = () => {

    const name= document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const major = document.getElementById("major").value;
    const github = document.getElementById("github").value;
    const instagram = document.getElementById("instagram").value;

    const newItem={
      name: name,
      job: job,
      major: major,
      github: github,
      instagram: instagram,
    };
    data.push(newItem);
  
    showData();
  
    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
    document.getElementById("major").value = "";
    document.getElementById("github").value = "";
    document.getElementById("instagram").value = "";
  
  };

const showData = () => {
  const contentList = document.querySelector(".content-list");
  contentList.replaceChildren();
  

  data.forEach((item)=> {
    let div = document.createElement("div");
    div.setAttribute("class","content");
    div.id = "content";
    
    
    const img = document.createElement('img')
    img.src = obj.imageSrc;
    img.style.width = '200px';
    img.style.height = '200px';
    div.appendChild(img);

    for(let key in item){
      const p = document.createElement("p");
      // const image = document.createElement("img");
      const text = document.createTextNode(`${key}   ${item[key]}`);
      p.appendChild(text);
      div.appendChild(p);
    }
    contentList.appendChild(div);
  })
  
  
  var color = document.getElementById("color");
  console.log(color.value)
  var area = document.getElementById("content");
  area.style.backgroundColor = color.value;
};
