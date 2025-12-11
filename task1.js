function najmanjiElement(a) {
  let element = Math.min(...a);
  return element;
}

let niz = [7, 53, 725, 5, 6, 33];
console.log(najmanjiElement(niz));
