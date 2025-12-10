function arrayAverage (a) {
let sum = 0;
let average = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
    average = sum / a.length;
}
    return average
}

var a = [1, 2, 3, 4, 5, 10];
console.log(arrayAverage(a))