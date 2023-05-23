function fetchItems() {
  return new Promise(function (resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems);
}

logItems();
