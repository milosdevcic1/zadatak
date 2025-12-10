var a = [
  "ime",
  "prezime",
  "godina rodjenja",
  "mesto rodjenja",
  "mesto prebivalista",
  "zanimanje",
  "pol",
  "username",
  "email",
  "password",
];
var b = [
  "Zikica",
  "Peric",
  "1956",
  "Split",
  "Novi Sad",
  "automehanicar",
  "non-binari",
  "zikaperic56",
  "zikaperic@gmail.com",
  "1234",
];

function podaci(a, b) {
  let arrayLength = Math.min(a.length, b.length);
  let lista = [];
  for (let i = 0; i < arrayLength; i++) {
    lista.push(`${a[i]} : ${b[i]}`);
  }
  return lista.join("\n");
}

console.log(podaci(a, b));
