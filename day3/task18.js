var a = [1, 2, 3, 4, 5]
var b = [5, 4, 3, 2, 1]

let arrayLength = Math.min(a.length, b.length)

for (let i = 0; i < arrayLength; i++) {
    console.log(a[i] + b[i])
}