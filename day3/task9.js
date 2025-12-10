function everyOther (a) {
    let array = []

    for (let i = 0; i < a.length; i++ ) {
    if (i % 2 !== 0) {
        array.push (a[i])
    }
    }
    
    return array.join("\n")

}

var a = [1, 2, 3, 4, 5, 10];
console.log(everyOther(a))

