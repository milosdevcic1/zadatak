function elements (a) {

for (let i = 0; i < a.length; i++) {
    return a.join('\n')
}
}

var a = [1, 2, 3, 4, 5, 10];
console.log(elements(a))