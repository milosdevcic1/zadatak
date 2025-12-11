function tenEvenNumbers(n) {
  let max = n + 19;
  let niz = [];
  for (let i = n; i <= max; i++) {
    if (i % 2 === 0) {
      niz.push(i);
    }
  }
  return niz.join("\n");
}

console.log(tenEvenNumbers(37));
