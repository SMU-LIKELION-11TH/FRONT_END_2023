let data=[];    

// 명함 띄우기
const submit = () => {
    const myname = document.getElementById("myname").value;
    const title = document.getElementById("title").value;
    const school = document.getElementById("school").value;
    const git = document.getElementById("git").value;
    const instar = document.getElementById("instar").value;
    const select_color = document.getElementById("select_color").value;
    /* 이미지 */
    const realUpload = document.querySelector('.real-upload');
    const upload = document.querySelector('.upload');

  
    const newItem = {
        myname: myname,
        title: title,
        school:school,
        git:git,
        instar: instar,
        select_color: select_color,
        
    };
    data.push(newItem);
    console.log(data);

    
    showData();

    document.getElementById("myname").value="";
    document.getElementById("title").value="";
    document.getElementById("school").value="";
    document.getElementById("git").value="";
    document.getElementById("instar").value="";
    document.getElementById("select_img").value="";
    document.getElementById("select_color").value="";
};

// data 배열에 담긴 객체 모두 보이기
const showData = () =>{
    const contentList = document.querySelector(".content-list");
    contentList.replaceChildren();
    
    data.forEach((item) => {
        let div = document.createElement("p");
        div.setAttribute("class", "content");
        contentList.appendChild(div);

        for(let key in item) {
            const p = document.createElement("p");
            const text = document.createTextNode(`${item[key]}`);
            p.appendChild(text);
            div.appendChild(p);
        }
    });
};



