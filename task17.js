function najBliziElementi(niz) {
  let broj1 = niz[0];
  let broj2 = niz[1];
  let najmanjarazlika = Math.abs(niz[0] - niz[1]);
  for (let i = 0; i < niz.length; i++) {
    for (let j = i + 1; j < niz.length; j++) {
      let razlika = Math.abs(niz[i] - niz[j]);
      if (razlika < najmanjarazlika) {
        najmanjarazlika = razlika;
        broj1 = niz[i];
        broj2 = niz[j];
      }
    }
  }
  return [broj1, broj2];
}

let a = [6, 6, 13, 18, 16, 2, 1];
console.log(najBliziElementi(a));
