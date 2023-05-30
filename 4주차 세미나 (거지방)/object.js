//변수 하나에 하나의 정보 들어간다.
//나라는 사람의 정보를 콘솔에 띄우고 싶어요
const name = "지영";
const age = 23;
const gender = "female";

//이러면 하나하나 다루기 너무 힘들겠죠?
//객체를 사용 : 객체는 키와 밸류의 집합체이다.
//object = {key : value}
const 지영 = {
  name: "지영",
  age: 23,
  gender: "female",
};

//객체의 key로 접근하기
console.log(지영.name);
console.log(지영.age);

//다른 방법으로 접근할 수 있음. 꼭 key는 string타입이어야 함.
console.log(지영["name"]);
console.log(지영["age"]);

//5. in Operator
console.log("name" in 지영);
console.log("live" in 지영); //없어요
console.log(지영.live); //undefined

//6. for .. in
for (key in 지영) {
  var value = 지영[key];
  console.log(`${key} : ${value}`);
}
