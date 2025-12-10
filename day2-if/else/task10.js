function greaterNumber (a, b, c) {
    if (a > b && a > c) {
        return 'First is greater than the other two'
    }
    else if (b > a && b > c) {
        return 'Second is greater than the other two'
    }
    else if (c > b && c > a) {
        return 'Third is greater than the other two'
    }
}

console.log(greaterNumber(5, 50, 150))
console.log(greaterNumber(50, 150, 5))
console.log(greaterNumber(150, 50, 5))