function cheapElectricity (hours) {
    return hours >= 22 || hours < 6 ? 'Palim bojler' : 'Ne palim bojler'
}
console.log(cheapElectricity(17))