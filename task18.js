function arrayCount(a, b) {
  let noviNiz = [];
  for (let i = 0; i < b.length; i++) {
    let zbir = 0;
    for (let j = 0; j < a.length; j++) {
      if (b[i] == a[j]) {
        zbir += 1;
      }
    }
    noviNiz.push(zbir);
  }
  return noviNiz;
}

let a = [4, 1, 5, 1, 6, 2, 7, 1];
let b = [4, 3, 2, 1];
console.log(arrayCount(a, b));
