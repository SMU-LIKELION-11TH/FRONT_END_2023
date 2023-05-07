const items = doucument.querySelector(".items");
const itemDelete = document.querySelector('.itemDelete');
let Todo = {
    1 : 'Egg'
}

function addTodo(e){
    //사용자로부터 입력한 값을 받아온다.
    console.log(e.target.value);
    const text = e.target.value;
    console.log(Todo);
    let count = Object.keys(Todo).length;
    count++;
    Todo = {...Todo, [count]:text}
    console.log(Todo);
    // 입력한 값을 동적으로 아이템에 추가
    const item = createChild(text);
    // 아이템 전체 출력
    
}