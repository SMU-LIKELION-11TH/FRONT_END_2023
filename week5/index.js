// indexOf()
// 문자열의 특정 값이 시작되는 윛

// slice()
// 문자열의 일부를 잘라냄

let data = [];
let count = 0;
const instaLogo = "<i class=\"fa-brands fa-instagram\"></i>";
const gitLogo = "<i class=\"fa-brands fa-github\"></i>";
const imagePath = "./idImage.jpg";

// 정보 등록
const submit = () => {
    const author = document.getElementById("author").value;
    const role = document.getElementById("role").value;
    const part = document.getElementById("part").value;
    const git = document.getElementById("git").value;
    const instagram = document.getElementById("instagram").value;

    // info
    const newItem = {
        author: author,         // 이름
        role: role,             // 역할
        part: part,             // 소속
        git: git,               // 깃주소
        instagram: instagram,    // 인스타주소
        idColor: editColor()    // 배경색 값
    };

    data.push(newItem);
    console.log(data);
    showData();

    document.getElementById("author").value = "";
    document.getElementById("role").value = "";
    document.getElementById("part").value = "";
    document.getElementById("git").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("idColor").value = "";

    return true;
};

// html에 만든 명함 show
const showData = () => {
    const contentList = document.querySelector(".content-list");
    contentList.replaceChildren();
    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "content");
        div.setAttribute("style", "background-color:"+item.idColor);
        contentList.appendChild(div);

        // 사진 + 이름
        let div1 = document.createElement("div");
        div1.setAttribute("class", "content-name");
        contentList.appendChild(div1);
        let img_id = document.createElement("img");
        img_id.setAttribute("src", imagePath);
        div1.appendChild(img_id);

        const p5 = document.createElement("p");
        const textAuthor = document.createTextNode(item.author);
        p5.appendChild(textAuthor);
        div1.appendChild(p5);


        // role + part       
        let div2 = document.createElement("div");
        div2.setAttribute("class", "content-role");
        contentList.appendChild(div2);

        const p = document.createElement("p");
        const textRole = document.createTextNode(item.role);
        p.appendChild(textRole);
        div2.appendChild(p);

        const p1 = document.createElement("p");
        const textPart = document.createTextNode(item.part);
        p1.appendChild(textPart);
        div2.appendChild(p1);


        // git + insta
        let div3 = document.createElement("div");
        div3.setAttribute("class", "content-sns");
        contentList.appendChild(div3);

        let logo = document.createElement("i");
        logo.setAttribute("class", "fa-brands fa-github");
        const p2 = document.createElement("p");
        const textGit = document.createTextNode(item.git);
        div3.appendChild(logo);
        p2.appendChild(textGit);
        div3.appendChild(p2);

        const p3 = document.createElement("p");
        const textInst = document.createTextNode(item.instagram);
        p3.appendChild(textInst);
        div3.appendChild(p3);

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        count++;
    });

    // data.forEach((item) => {
    //     let div = document.createElement("div");
    //     div.setAttribute("class", "content");
    //     contentList.appendChild(div);
    //     for (let key in item) {
    //         const p = document.createElement("p");
    //         const text = document.createTextNode(`${item[key]}`);
    //         p.appendChild(text);
    //         div.appendChild(p);
    //     }
    // });
};

// 명함 색을 바꿔주는 함수
const editColor = () => {
    const idColor = document.getElementById("idColor").value;
    return idColor;
};

// 사진 입력하는 함수
const setImage = () => {

};

