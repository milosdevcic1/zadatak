function nizovi (broj) {

var neparniNiz = [];
var parniNiz = [];

for (let n = 1; n <= 100; n++) {
    if (n % 2 === 0) {
        neparniNiz.push(n)
    }
    else {
        parniNiz.push(n)
    }
}
  let konacanNiz = neparniNiz + parniNiz
  return konacanNiz

}

var broj = 100 
console.log(nizovi(broj))
