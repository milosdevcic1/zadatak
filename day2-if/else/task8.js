function leapYear (y) {
    if (y % 4 === 0) {
        return 'This year is a leap year'
    }
    else {
        return 'This year is not a leap year'
    }
}

console.log(leapYear(2003))
console.log(leapYear(2004))