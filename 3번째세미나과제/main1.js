const items = document.querySelector('.items');
const itemDelete = document.querySelector('.itemDelete');
let Todo = {
    1 : 'Egg'
}

function addTodo(e){
    
    console.log(e.target.value);
    const text = e.target.value;
    console.log(Todo);
    let count = Object.keys(Todo).length;
    count++;
    Todo = {...Todo, [count]:text}
    console.log(Todo);
    const item = createChild(text); //자식으로 달면 아이템이 생성됨
    console.log(item);
    items.appendChild(item);

    e.target.value = '';
}

function createChild(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const span = document.createElement('span');
    span.setAttribute('class','item_name');
    span.innerText = text;

    const button = document.createElement('button');
    button.setAttribute('class','item_delete');
    button.innerHTML = '<i class="fas fa-trash-alt"></i>';

    const divider = document.createElement('div');
    divider.setAttribute('class','itemDiv');

    button.addEventListener('click',(e) => {
        console.log(e.target)
        items.removeChild(itemRow);
    })
    
    item.appendChild(span);
    item.appendChild(button);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);
    return itemRow;

}