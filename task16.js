function noviNiz(niz) {
  let array = [];
  while (niz.length > 0) {
    let najmanjiElement = Math.min(...niz);
    let index = niz.indexOf(najmanjiElement);
    array.push(najmanjiElement);
    niz.splice(index, 1);
  }
  return array;
}

let niz = [2, 22, 45, 1, 54];
console.log(noviNiz(niz));
