function ocena(brojBodova) {

    if (brojBodova < 55) {
        return 'Konacna ocena je 5'
    }
    else if (brojBodova <= 64) {
        return 'Konacna ocena je 6'
    }
    else if (brojBodova <= 74) {
        return'Konacna ocena je 7'
    }
    else if (brojBodova <= 84) {
        return'Konacna ocena je 8'
    }
    else if (brojBodova <= 94) {
        return 'Konacna ocena je 9'
    }
    else if (brojBodova <= 100) {
        return 'Konacna ocena je 10'
    }
    else {
        return 'Invalid entry'
    }
}

console.log(ocena(54))
console.log(ocena(60))
console.log(ocena(72))
console.log(ocena(83))
console.log(ocena(94))
console.log(ocena(95))
console.log(ocena(101))