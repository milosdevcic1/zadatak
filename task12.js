function arrays(arr) {
  let lista = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      lista.push(arr[i][j]);
    }
  }
  return lista.join("\n");
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(arrays(arr));
