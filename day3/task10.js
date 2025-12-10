function sumArray (a) { 
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
    return sum

}

var a = [1, 2, 3, 4, 5, 10];
console.log(sumArray(a))