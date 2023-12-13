// 배열 만들기

const colors = ["white", "black", "pink"];
console.log(colors); //array

// index position
console.log(colors.length); //3
console.log(colors[0]); //white

// 배열의 요소 모두 출력하는 방법
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let color of colors) {
  console.log(color);
}

colors.forEach((color) => {
  console.log(color);
});

// (+) 익명함수와 화살표 함수 !
// 평소에 선언했던 함수 방식 hello 이름을 지어줌
function hello1() {
  console.log("hello");
}

// 변수에 함수를 담아줘용
const hello = function () {
  console.log("hello");
};

const hello2 = () => {
  console.log("hello");
};

const hello3 = () => console.log("hello");

hello1();
hello2();
hello3();
//똑같은 결과

//배열 추가하기 삭제하기 1 (뒷부분에서 )
colors.push("orange", "purple");
console.log(colors);
colors.pop("purple");
console.log(colors);

//배열 추가하기 삭제하기 2 (index 위치에서)
colors.splice(1, 1); //index 1부터 하나만 지우기
console.log(colors);
colors.splice(1, 1, "gray"); //index 1부터 하나만 지우고, 지운 자리부터 gray 추가
console.log(colors);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2); //배열 합치기
console.log(newArr);

//배열에 찾기
console.log(colors.indexOf("white")); //숫자
console.log(colors.includes("gold")); //false
console.log(colors.indexOf("gold")); //-1
