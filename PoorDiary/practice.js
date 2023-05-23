// function work() {
//     setTimeout(handler: () => {
//         const start = Data.now();
//         for (let i = 0; i < 100000; i++) {}
//         const end = Data.now();
//         console.log(end - start + 'ms');
//     }, timeout: 3000)
// }

// console.log('작업 시작 !!!');
// work();
// console.log('작업 끝 !!!!!');






// function goToschool() {
//     console.log('학교 출발~');
// }

// function study() {
//     console.log('공부합니다');
// }

// function arriveAtSchool() {
//     return new Promise(function(resolve) {
//         setTimeout(fuction() {
//             console.log('학교 도착!');
//             resolve();
//         }, timeout: 1000);
//     });
// }

// goToschool();
// arriveAtSchool().then(fuction() {
//     study();
// });


function fetchItem() {
    return new Promise(function(resolve, reject) {
        var items = [1, 2, 3];
        resolve(items);
    });
}

async function logItems() {
    var resultItems = await fetchItem();
    console.log(resultItems);
}

logItems();