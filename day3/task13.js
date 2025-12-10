var prirodniBrojevi = [];

for (let n = 1; n <= 100; n++) {
    prirodniBrojevi.push(n);
   
}
for (let broj of prirodniBrojevi)
    console.log(broj);

// Ovo ispod je funkcija u kojoj se ocekuje promenljiva 'broj's

function ispisiPrirodneBrojeve (broj) {

    var prirodniBrojevi = [];

    for (let n = 1; n <= broj; n++) {
        prirodniBrojevi.push(n)
    }
    return prirodniBrojevi.join('\n')
}

console.log(ispisiPrirodneBrojeve(100))