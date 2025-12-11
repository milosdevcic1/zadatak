function repeatedElement(niz, a) {
  let niz2 = [];
  for (let broj of niz) {
    if (broj % a == 0) {
      niz2.push(broj);
    }
  }
  return niz2.length;
}

let niz = [24, 15, 5, 5, 3, 10, 5];
let a = 5;
console.log(repeatedElement(niz, a));
