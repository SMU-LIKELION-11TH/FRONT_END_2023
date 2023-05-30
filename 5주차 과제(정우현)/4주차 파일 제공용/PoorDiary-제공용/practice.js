/*
function Callback(callback){
    console.log('callback function');
    callback();
}

Callback(function(){
    console.log('callback 호출')
})
*/
/*
function work() {
    setTimeout( handler:() =>{
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {}
        const end = Date.now();
        console.log(end - start + 'ms');        
    }, timeout:0);

}

console.log('작업 시작!');
work();
console.log('다음 작업');
*/
/*
function goToSchool() {
    console.log("학교에 갑니다.");
}

function study() {
    console.log("열심히 공부를 합니다.");
}

function arriveAtSchool() {
    return new Promise( executor: function(resolve){
        setTimeout(handler: function(){
            console.log("학교에 도착했습니다.");
            resolve();
        }, timeout: 1000);
    });
}
*/

function fetchItems() {
    return new Promise( executor: function(resolve, reject){
        var item = [1,2,3];
        resolve(items);
    });
}

async function logItems(){
    var resultItems = await fetchItems();
    console.log(resultItems);
}

logItems();