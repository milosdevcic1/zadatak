var a = [1, 2, 3, 4, 5];
var b = [5, 4, 3, 2, 1];

function twoArrays(a, b) {
  let arrayLength = Math.min(a.length, b.length);
  let rezultat = [];
  for (let i = 0; i < arrayLength; i++) {
    rezultat.push(a[i] + b[i]);
  }
  return rezultat.join("\n");
}

console.log(twoArrays(a, b));
