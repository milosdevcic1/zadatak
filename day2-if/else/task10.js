function greaterNumber (a, b, c) {
    if (a > b && a > c) {
        console.log('First is greater than the other two')
    }
    else if (b > a && b > c) {
        console.log('Second is greater than the other two')
    }
    else if (c > b && c > a) {
        console.log('Third is greater than the other two')
    }
}

greaterNumber(5, 50, 150)
greaterNumber(50, 150, 5)
greaterNumber(150, 50, 5)