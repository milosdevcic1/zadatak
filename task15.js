function spisak(lista, pravac) {
  let row = 0;
  let column = 0;
  for (let korak of pravac) {
    if (korak == "down") {
      if (row === lista.length - 1) {
        row = 0;
      } else {
        row++;
      }
    } else if (korak == "up") {
      if (row === 0) {
        row = lista.length - 1;
      } else {
        row--;
      }
    } else if (korak == "left") {
      if (column === 0) {
        column = lista.length - 1;
      } else {
        column--;
      }
    } else if (korak == "right") {
      if (column === lista.length - 1) {
        column = 0;
      } else {
        column++;
      }
    }
  }
  return lista[row][column];
}

let lista = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let pravac = ["left", "down", "right", "down", "left"];
console.log(spisak(lista, pravac));
