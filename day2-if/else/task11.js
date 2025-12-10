function numberOrder (a, b, c) {
    if (a < b && a < c && b < c) {
        return[a, b, c]
    }
    else if (a < b && a < c && c < b) {
        return[a, c, b]
    }
    else if (b < a && b < c && a < c) {
        return[b, a, c]
    }
    else if (b < a && b < c && c < a) {
        return[b, c, a]
    }
    else if (c < b && c < a && a < b) {
        return[c, a, b]
    }
    else if (c < b && c < a && b < a) {
        return[c, b, a]
    }
}

console.log(numberOrder(34, 61, 4))
console.log(numberOrder(654, 3, 92))
console.log(numberOrder(922, 53, 234))
