
// // 함수선언
// function Callback(callback){
//     console.log('callback function');
//     callback();
// }

// Callback(function(){
//     console.log('callback 호출');
// })

// // const message = function() {
// //     console.log("This message is shown after 3 seconds");
// // }

// // setTimeout(message, timeout:3000);

// function work(){
//     setTimeout(handler: () => {
//         const start = Date.now();
//         for (let i =0;i < 1000000000; i++) {}
//         const end = Date.now();
//         console.log(end - start + 'ms');
//     }, timeout: 0);
// }

// console.log('작업 시작 !!!');
// work();
// console.log('작업 끝 !!!!!');




// function goToSchool(){
//     console.log("학교에 갑니다.");
// }

// function arriveAtSchool_asis(){
//     return new Promise( executor: function(resolve){
//         setTimeout( handler: function(){
//             console.log("학교에 도착했습니다.");
//         }, timeout: 1000);
//     });
// }

// function study(){
//     console.log("열심히 공부를 합니다.");
// }

// goToSchool();
// arriveAtSchool_asis().then(function(){
//     study();
// });




function fetchItems(){
    return new Promise(function(resolve, reject){
        var items = [1,2,3];
        resolve(items);
    });
}

async function logItems(){
    var resultItems = await fetchItems();
    console.log(resultItems);
}

logItems();