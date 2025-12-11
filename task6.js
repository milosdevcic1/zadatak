function numberRange(niz, a, b) {
  for (let broj of niz) {
    if (broj < a || broj > b) {
      return false;
    }
  }
  return true;
}

let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = 1;
let b = 9;

console.log(numberRange(niz, a, b));
