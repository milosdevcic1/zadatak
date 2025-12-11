function averageValue(niz) {
  let sum = 0;
  let average = 0;
  for (let broj of niz) {
    sum += broj;
  }
  average = sum / niz.length;
  return average;
}
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(averageValue(a));
