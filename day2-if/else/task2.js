function cheapElectricity (hours) {
    console.log(hours >= 22 || hours < 6 ? 'Palim bojler' : 'Ne palim bojler')
}
cheapElectricity(17);