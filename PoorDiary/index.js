let data = [];
let id = 0;

//거지 영수증 등록하기
const submit = () => {
    const author = document.getElementById("author").value;
    const payment = document.getElementById("payment").value;
    const comment = document.getElementById("comment").value;
    const score = document.getElementById("score").value;

    const newItem = {
        id: id++,
        date: new Date().toLocaleDateString(),
        author: author,
        payment: payment,
        comment: comment,
        score: score,

    };

    data.push(newItem);

    console.log(data);

    showData();

    document.getElementById("author").value = "";
    document.getElementById("payment").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("score").value = 1;

};


//data 배열에 담긴 객체 모두 보여주기
const showData = () => {
    const contentList = document.querySelector(".content-list");
    contentList.replaceChildren();

    data.forEach((item) => {
        let div = document.createElement("div");
        div.setAttribute("class", "content");
        contentList.appendChild(div);

        for (let key in item) {
            const p = document.createElement("p");
            const text = document.createTextNode(`${key}: ${item[key]}`);
            p.appendChild(text);
            div.appendChild(p);
        }


    });
};

//id 기준으로 객체 삭제하기
const deleteItem = (id) => {
    data = data.filter((item) => item.id !== id);
    showData();
};

//id 기준으로 객체의 내부 프로퍼티 수정하기
const editItem = (id, key, value) => {
    data = data.map((item) => {
        if (item.id == id) {
            item[key] = value;
        }
        return item;
    });

    showData();
};

//삭제버튼을 누르면 id 입력하게 하기
const deleteEvent = () => {
    let id = prompt("삭제할 거지 영수증의 id를 입력하세요");
    id = parseInt(id);

    deleteItem(id);
};

//수정버튼을 누르면 id,key,value 입력하게 하기
const editEvent = () => {
    let id = prompt("수정할 거지 영수증의 id를 입력하세요");
    id = parseInt(id);

    const key = prompt("수정할 프로퍼티의 이름을 입력하세요.");
    const value = prompt("수정할 값을 입력하세요.");
    editItem(id, key, value);
};