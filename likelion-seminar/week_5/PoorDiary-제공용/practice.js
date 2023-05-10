function goToSchool() {
  console.log('go');
}

function study() {
  console.log('study');
}

function arriveAtSchool() {
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log(('arrive'));
      resolve();
    }, 1000);
  });
}

goToSchool();
arriveAtSchool()
.then(() => {
  study();
});

function fetchItems() {
  return new Promise((res, rej) => {
    var items = [1, 2, 3];
    res(items);
  });
}

async function logItems() {
  var resItems = await fetchItems();
  console.log(resItems);
}

logItems();