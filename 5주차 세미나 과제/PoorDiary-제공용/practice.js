/*
function Callback(callback) {
    console.log('callback function');
    callback();
}

Callback(callback:function() { // -> 매개변수로 작동됨.
    console.log('callback 호출');
}) 
*/

function work() {
    setTimeout( ()=>{   // handler부분
        const start = Date.now();
        for (let i = 0; i < 100000000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');
    },  3000)   // timeout부분
}
console.log('작업 시작!!!');
work();
console.log('작업 끝...');

/*
function goToSchool() {
    console.log('학교 가');
}

function study() {
    console.log('공부합니다');
}

function arriveAtSchool() {
    return new Promise( function(resolve) { // executor: function(resolve)
        setTimeout(function() { //handler: function()
            console.log('학교 도착');
            resolve();
        }, 000);   // 1000 ->timeout(1초)
    });
}

goToSchool();
arriveAtSchool().then(function(){ // 제대로 반환이 되면 then의 함수가 실행이 됨.
    study();
});
*/

/*
function fetchItems() {
    return new Promise(function(resolve, reject){
        var items = [1,2,3];
        resolve(items);
    });
}
async function logItems() {
    var resultItems = await fetchItems();
    console.log(resultItems);
}

logItems();
*/