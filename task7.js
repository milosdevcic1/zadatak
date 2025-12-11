function numberRange(niz, a, b) {
  for (let broj of niz) {
    if (broj < a || broj > b) {
      return false;
    }
  }
  return true;
}

let niz = [5, 2, 3, 9, 4, 6, 8, 7, 1];
let a = 1;
let b = 9;

console.log(numberRange(niz, a, b));
