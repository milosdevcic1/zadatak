function ocena(brojBodova) {

    if (brojBodova < 55) {
        console.log('Konacna ocena je 5')
    }
    else if (brojBodova <= 64) {
        console.log('Konacna ocena je 6')
    }
    else if (brojBodova <= 74) {
        console.log('Konacna ocena je 7')
    }
    else if (brojBodova <= 84) {
        console.log('Konacna ocena je 8')
    }
    else if (brojBodova <= 94) {
        console.log('Konacna ocena je 9')
    }
    else if (brojBodova <= 100) {
        console.log('Konacna ocena je 10')
    }
    else {
        console.log('Invalid entry')
    }
}

ocena(54);
ocena(60);
ocena(72);
ocena(83);
ocena(94);
ocena(95);
ocena(101);