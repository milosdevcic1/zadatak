function number (n) {
    if (n > 0 && n < 10) {
        console.log('Ovo je jednocifren broj')
    }
    else if (n < 100) {
        console.log('Ovo je dvocifren broj')
    }
    else if (n < 1000) {
        console.log('Ovo je trocifren broj')
    }
    else {
        console.log('Ovaj broj je u minusu ili ima vise od 3 cifre')
    }
 }

 number(6)
 number(53)
 number(111)