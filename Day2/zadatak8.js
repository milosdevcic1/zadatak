function calculate (a, b, c) {

    if (a > 0) {
        return b + c
    }
    else {
        return b - c
    }
};

const number = calculate (5, 10, 15);
console.log(number);