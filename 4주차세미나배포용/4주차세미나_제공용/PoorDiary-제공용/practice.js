// function Callback(callback) {
//     console.log('callback function');
//     callback();
// }

// Callback( function() {
//     console.log('callback 호출');
// })

// function work() {
//     setTimeout( handler: () =>{
//         const start = Date.now();
//         for (let i =0; i < 100000000; i++) {}
//         const end = Date.now();
//         console.log(end-start + 'ms');
//     }, timeout: 3000)
// }

// console.log('작업 시작 !!!');
// work();
// console.log('작업 끝!');

// function goToSchool() {
//     console.log('학교 출발~');
// }

// function study() {
//     console.log('공부합니다~');
// }

// function arriveAtSchool() {
//     return new Promise(executor: function(resolve){
//         setTimeout( handler: function() {
//             console.log('학교 도착!');
//             resolve();
//         }, timeout: 1000);
//     });
// }

// goToSchool();
// arriveAtSchool().then(function() {
//     study();
// });

function fetchItems() {
    return new Promise(function(resolve, reject){
        var items = [ 1, 2, 3 ];
        resolve(items);
    });
}

async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems);
}

logItems();