function addValue(a) {
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i] + 1;
  }
  return a.join("\n");
}

var a = [1, 2, 3, 4, 5, 10];
console.log(addValue(a));
