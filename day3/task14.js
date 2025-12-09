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

for (let neparni of neparniNiz)
    console.log(neparni)
for (let parni of parniNiz)
    console.log(parni)