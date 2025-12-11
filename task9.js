function repeatedElement(niz, a) {
  let niz2 = [];
  for (let broj of niz) {
    if (broj == a) {
      niz2.push(broj);
    }
  }
  return niz2.length;
}

let niz = [2, 3, 5, 5, 3, 6, 5];
let a = 5;
console.log(repeatedElement(niz, a));
