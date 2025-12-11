function neparniBrojevi(niz) {
  let noviNiz = [];
  for (let broj of niz) {
    if (broj % 2 !== 0) {
      noviNiz.push(broj);
    }
  }
  return noviNiz.join("\n");
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(neparniBrojevi(a));
