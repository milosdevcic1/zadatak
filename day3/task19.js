var a = ['ime', 'prezime', 'godina rodjenja', 'mesto rodjenja', 'mesto prebivalista', 'zanimanje', 'pol', 'username', 'email', 'password']
var b = ['Zikica', 'Peric', '1956', 'Split', 'Novi Sad', 'automehanicar', 'non-binari', 'zikaperic56', 'zikaperic@gmail.com', '1234']
var c = {};

let arrayLength = Math.min(a.length, b.length)

for (let i = 0; i <= arrayLength; i++) {
    c[a[i]] = b[i]

}
console.log(c)