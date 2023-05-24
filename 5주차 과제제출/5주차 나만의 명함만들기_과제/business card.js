
const fileDOM = document.getElementById('#AddPicture');
const preview = document.querySelector('.AddPicture');


fileDOM.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      preview.src = target.result;
      console.log(AddPicture);
    };
    reader.readAsDataURL(fileDOM.files[0]);
  });

let NewBusinesscard=[];
let id =0;
// console.log("test-text");

//input 등록하기
const submit = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    const workin = document.getElementById("workin").value;
    const githublink = document.getElementById("githublink").value;
    const instagramlink = document.getElementById("instagramlink").value;

    const newcard = {
        id: id++,
        name: name,
        job: job,
        workin: workin,
        githublink: githublink,
        instagramlink: instagramlink,
    };

    NewBusinesscard.push(newcard);

    showData();

    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
    document.getElementById("workin").value = "";
    document.getElementById("githublink").value = "";
    document.getElementById("instagramlink").value = "";
};

//data 배열에 담긴 객체 모두 보여주기
const showData = () => {
    const contentList = document.querySelector(".NewBusinesscard");
    contentList.appendChildren();

    NewBusinesscard.forEach((item) => {
        const left = document.getElementById('left');
        const right = document.getElementById('right');
        NewBusinesscard.appendChildren(left,right);

        let NewBusinesscard = document.createElement("div");
        NewBusinesscard.setAttribute("class","NewBusinesscard");
        NewBusinesscard.style.AddBackground = `$(NewBusinesscard.AddBackground)`;

        let image_box = document.createElement("img");
        image_box.setAttribute("class", "image_box");
        image_box.src = newcard.image_box;
        left.appendChild(image_box);


        let name = document.createElement("h2");
        name.setAttribute("class", "div");
        name.innerText = newcard.name;
        left.appendChild(name);

        let job = document.createElement("p");
        job.setAttribute("class", "job");
        right.appendChild(job);

        let workin = document.createElement("p");
        workin.setAttribute("class", "workin");
        right.appendChild(workin);

        let githublink = document.createElement("p");
        githublink.setAttribute("class", "githublink");
        right.appendChild(githublink);

        let instagram = document.createElement("p");
        instagram.setAttribute("class", "instagram");
        right.appendChild(instagram);
    });
}



