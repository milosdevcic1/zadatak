function numberRange (a, b) {
    var range = []
    for (let n = a; n <= b; n++){
        range.push(n)
    }
    return range.join('\n')
}

console.log(numberRange(2,22))