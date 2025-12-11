function arraySum(arr) {
  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  return sum;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arraySum(a));
