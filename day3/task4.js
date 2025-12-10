function longerArray(a, b) {
  if (a.length > b.length) {
    return a.join("\n");
  } else {
    return b.join("\n");
  }
}

var a = [1, 2, 3, 4];
var b = [1, 2, 3, 4, 5];
console.log(longerArray(a, b));
