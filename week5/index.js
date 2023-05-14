let data = [];

//등록하기
const submit = () => {
  const author =document.getElementById("author").value;
  const major=document.getElementById("major").value;
  const github=document.getElementById("github").value;
  const insta=document.getElementById("insta").value;
  const part=document.getElementById("part").value;

  const newItem={
    author:author,
    part:part,
    major:major,
    github:github,
    insta:insta
  };
  data.push(newItem);
  console.log(data);

  showData();

  document.getElementById(author).value="",
  document.getElementById(part).value="",
  document.getElementById(major).value="",
  document.getElementById(github).value="";
  document.getElementById(insta).value="";
};

//data 배열에 담긴 객체 모두 보여주기
const showData = () => {
  const contentList =document.querySelector(".content-list");
  contentList.replaceChildren();

  data.forEach((item)=>{
    let div =document.createElement("div");
    div.setAttribute("class","content");
    contentList.appendChild(div);

    for(let key in item){
      const p =document.createElement("p");
      const text =document.createTextNode(`${item[key]}`);
      p.appendChild(text);
      div.appendChild(p);
    }
  });
};
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById('preview').src = "";
  }
}
const changeColor =document.querySelector("background");
document.contentList.backgroundColor=changeColor;



 

  
  
