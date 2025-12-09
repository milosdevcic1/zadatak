function numberOrder (a, b, c) {
    if (a < b && a < c && b < c) {
        console.log(a, b, c)
    }
    else if (a < b && a < c && c < b) {
        console.log(a, c, b)
    }
    else if (b < a && b < c && a < c) {
        console.log(b, a, c)
    }
    else if (b < a && b < c && c < a) {
        console.log(b, c, a)
    }
    else if (c < b && c < a && a < b) {
        console.log(c, a, b)
    }
    else if (c < b && c < a && b < a) {
        console.log(c, b, a)
    }
}

numberOrder(34, 61, 4)
numberOrder(654, 3, 92)
numberOrder(922, 53, 234)
