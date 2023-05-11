// function Callback(callback) {
//   console.log('callback function');
//   Callback();
// }

// Callback(function () {
//   console.log('callback 호출');
// });

// const message = function () {
//   console.log('This message is shown after 3 seconds');
// };

// setTimeout(message, 3000);

// function work() {
//   setTimeout(() => {
//     const start = Date.now();
//     for (let i = 0; i < 100000; i++) {}
//     const end = Date.now();
//     console.log(end - start + 'ms');
//   }, 30000000);
// }

// console.log('start');
// work();
// console.log('end');

// function goToSchool() {
//   console.log('학교감');
// }

// function study() {
//   console.log('열심히 공부를 한다.');
// }

// function arriveAtSchool() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('학교에 도착함!');
//       resolve();
//     }, 1000);
//   });
// }

// goToSchool();
// arriveAtSchool().then(function () {
//   study();
// });

async function fetchItems() {
  return new Promise(function (resolve, reject) {
    let items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  let resultItems = await fetchItems();
  console.log(resultItems);
}
logItems();
