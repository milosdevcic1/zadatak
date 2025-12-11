function arrays(arr) {
  let lista = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      lista.push(arr[i][j]);
    }
  }
  for (let broj of lista) {
    sum += broj;
  }
  return sum;
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(arrays(arr));
