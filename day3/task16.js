var arr = [1, 2, 3, 4, 5, 6];

function findNumber(num) {
  return arr.includes(num)
    ? "Broj se nalazi u nizu"
    : "Broj se ne nalazi u nizu";
}

console.log(findNumber(3));
console.log(findNumber(7));
