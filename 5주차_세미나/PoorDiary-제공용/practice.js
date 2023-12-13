// function Callback(callback){
//     console.log('callback function');
//     callback();
// }

// Callback(function(){
//     console.log('callback 호출');
// })

// function work() {
//     setTimeout(() => {
//         const start = Date.now();
//         for(let i = 0; i < 10000000000; i++){}
//         const end = Date.now();
//         console.log(end - start + 'ms');
//     }, 9000);
// }

// console.log('작업 시작!');
// work();
// console.log("다음 작업");\

function arriveAtSchool_asis() {
    setTimeout(function(){
        console.log("학교에 도착했습니다.");
    }, 1000);
}


function goToSchool() {
    console.log("학교에 갑니다.");
}


function study() {
    console.log("열심히 공부를 합니다.");
}

function arriveAtSchool_asis() {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log("학교에 도착했습니다.");
            resolve();
        }, 1000);
    });
}

goToSchool();
arriveAtSchool_asis().then(function() {
    study();
});

function fetchItems() {
    return new Promise(function(resolve, reject){
        var items = [1, 2, 3];
        resolve(items);
    });
}

async function logItems(){
    var resultItems = await fetchItems();
    console.log(resultItems);
}

logItems();