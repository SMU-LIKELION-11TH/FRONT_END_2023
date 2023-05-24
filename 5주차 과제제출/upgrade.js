// 객체 배열에서 id가 1인사람 찾기

const array = [
  { id: 0, name: "지영", age: 23 },
  { id: 1, name: "연출", age: 25 },
  { id: 2, name: "석현", age: 25 },
  { id: 3, name: "혜린", age: 23 },
];

const result = array.find((item, index) => {
  console.log(item, index);
});

//find : 전달되는 콜백 함수가 true가 되는 배열의 첫번째 인자를 리턴한다.
//아니면 undefined 를 제공한다.
//그리고 콜백 함수는 배열에 있는 모든 요소마다 한 번씩 호출된다.

const result2 = array.find((item, index) => {
  return item.id === 1;
});
console.log(result2);

const result3 = array.filter((item, index) => {
  return item.age === 23;
});
console.log(result3);

const result4 = array.map((item, index) => {
  return item.name;
});
console.log(result4);
