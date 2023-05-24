let data = [];
const obj = {
  imageSrc:"",
}
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
    const img = document.createElement("img");
    img.src = obj.imageSrc;
    img.style.width = "200px"
    img.style.height = "200px"
    div.appendChild(img);
    

    for(let key in item){
      const p =document.createElement("p");
      const text =document.createTextNode(`${item[key]}`);
      p.appendChild(text);
      div.appendChild(p);
    }
  });
  
};
//이미지 생성
function loadFile(event){
  console.log("파일로드");
  var reader=new FileReader();
  reader.onload=function(event){
    const imageSrc=event.target.result;
    obj.imageSrc=imageSrc;
  }
}
//배경색 바꾸기
function colorInput(){
  const contentList = document.querySelector(".content-list");
  const colorInput = document.getElementById("background");
  const selectedColor=colorInput.value;
  contentList.style.backgroundColor=selectedColor;

}




 

  
  
