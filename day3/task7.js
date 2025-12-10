function multiplyArray (a) {

for (let i = 0; i < a.length; i++) {
    a[i] = a[i] * 2;
}
    return a.join("\n")

}

var a = [1, 2, 3, 4, 5, 10];
console.log(multiplyArray(a))
