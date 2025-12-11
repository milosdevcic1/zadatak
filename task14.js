function spisak(lista, pravac) {
  let row = 0;
  let column = 0;
  for (let korak of pravac) {
    if (korak == "down") {
      row++;
    } else if (korak == "up") {
      row--;
    } else if (korak == "left") {
      column--;
    } else if (korak == "right") {
      column++;
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

let pravac = ["down", "down", "right", "down"];
console.log(spisak(lista, pravac));
