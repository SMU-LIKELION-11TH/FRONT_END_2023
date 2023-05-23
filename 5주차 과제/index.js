let data = [];
// var file;
let file;
var files = [];
let id = 0;

function loadFile(input) {
    // file = input.files[0];
    file = input.files[0];
    files.push(URL.createObjectURL(file));
    // files.push(input);
}

const submit = () => {
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const rectal = document.getElementById("rectal").value;
    const git = document.getElementById("git").value;
    const insta = document.getElementById("insta").value;
    const color = document.getElementById("color").value;

    if (!files[id] || !name || !job || !rectal || !git || !insta) {
        alert("내용을 전부 입력하세요.");
    } else {
        const newItem = {
            name: name,
            job: job,
            rectal: rectal,
            git: git,
            insta: insta,
            color: color,
        };

        data.push(newItem);
        console.log(data);
        // console.log(files[id]);
        showData();
    };
};

const showData = () => {
    const contentList = document.querySelector(".content-list");
    contentList.replaceChildren();

    let i = 0;
    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "content");
        contentList.appendChild(div);

        let left = document.createElement("div");
        left.setAttribute("class", "content-left");
        div.appendChild(left);

        let right = document.createElement("div");
        right.setAttribute("class", "content-right");
        div.appendChild(right);

        let top = document.createElement("div");
        top.setAttribute("class", "right-top");
        right.appendChild(top);

        let down = document.createElement("div");
        down.setAttribute("class", "right-down");
        right.appendChild(down);

        console.log(i);
        console.log(files[i]);
        let newImage = document.createElement("img");
        newImage.setAttribute("class", "img");
        newImage.src = files[i];
        left.appendChild(newImage);
        i++;

        // 이미지
        // var newImage = document.createElement("img");
        // newImage.setAttribute("class", "img");
        // newImage.src = URL.createObjectURL(file);
        // left.appendChild(newImage);

        for (let key in item) {
            const p = document.createElement("p");
            const text = document.createTextNode(`${item[key]}`);

            if (key == "name") {
                p.appendChild(text);
                p.setAttribute("class", "name-p");
                left.appendChild(p);
            } else if (key == "job") {
                p.setAttribute("class", "job-p");
                p.appendChild(text);
                top.appendChild(p);
            } else if (key == "rectal") {
                var icon = document.createElement("i");
                icon.innerHTML = '<i class="fa-solid fa-building"></i>';
                p.appendChild(icon);
                p.appendChild(text);
                top.appendChild(p);
            } else if (key == "git") {
                var icon = document.createElement("i");
                icon.innerHTML = '<i class="fa-brands fa-github"></i>';
                p.appendChild(icon);
                p.appendChild(text);
                down.appendChild(p);
            } else if (key == "insta") {
                var icon = document.createElement("i");
                icon.innerHTML = '<i class="fa-brands fa-square-instagram"></i>';
                p.appendChild(icon);
                p.appendChild(text);
                down.appendChild(p);
            } else if (key == "color") {
                div.style.background = `${item[key]}`;
            };
        };

    });

    id++;
};