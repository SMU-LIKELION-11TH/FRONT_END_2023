// item태그에 아래 부분을 계속해서 추가해주면 됨
// 1. 추가하는 함수 구현
// 2. 아래 태그들을 만드는 함수 구현
{
  /* <li class="itemRow">
<div class="item">
  <span class="itemName">Run</span>
  <button class="itemDelete">
    <i class="fas fa-trash-alt"></i>
  </button>
</div>
<div class="itemDiv"></div>
</li> */
}

const items = document.querySelector('.items');
const input = document.querySelector('.itemInput');
const addBtn = document.querySelector('.AddBtn');

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  // 입력값이 없으면 거기에 focus를 두고 그냥 return
  if (text === '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만듭니다.
  const item = createItem(text);
  // 3. item container에 새로 만든 아이템을 추가합니다.
  items.appendChild(item);
  // 내가 입력한 값을 바로바로 확인할 수 있게(입력값이 많아져도)
  item.scrollIntoView({ block: 'center' });
  // 4. input 초기화
  input.value = '';
  input.focus();
}

function createItem(text) {
  // <li class = "itemRow"></li>
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'itemRow');

  // <div class="item"></div>
  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  // <span class="itemName">text</span> (즉, 아이템 추가)
  const name = document.createElement('span');
  name.setAttribute('class', 'itemName');
  name.innerText = text;

  // 그 옆에는 삭제 버튼이 있어야함 계속. 그리고 버튼 클릭시 삭제되도록. itemRow를 비워버리면됨
  const delBtn = document.createElement('button');
  delBtn.setAttribute('class', 'item_Delete');
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  // 삭제 동작
  delBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  // 분리선
  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'itemDiv');

  item.appendChild(name);
  item.appendChild(delBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
