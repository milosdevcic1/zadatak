function number (n) {
    if (n > 0 && n < 10) {
        return 'Ovo je jednocifren broj'
    }
    else if (n < 100) {
        return 'Ovo je dvocifren broj'
    }
    else if (n < 1000) {
        return 'Ovo je trocifren broj'
    }
    else {
        return 'Ovaj broj je u minusu ili ima vise od 3 cifre'
    }
 }

 console.log(number(6))
 console.log(number(53))
 console.log(number(111))