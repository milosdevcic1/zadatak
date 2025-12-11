function smallestNumberIndex(niz) {
  let smallest = Math.min(...niz);
  let indexOfSmallest = niz.indexOf(smallest);
  return indexOfSmallest;
}

let niz = [1, 2, 6, -1, 5];
console.log(smallestNumberIndex(niz));
