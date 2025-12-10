var arr = [1, 23, 54, 8234, 3];

function element(arr) {
  let biggestElement = Math.max(...arr);
  return biggestElement;
}

console.log(element(arr));
