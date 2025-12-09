function operations (a, b, operation) {

if (operation == 'saberi') {
    console.log(a + b)
}
else if (operation == 'oduzmi') {
    console.log(a - b)
}
else if (operation == 'pomnozi') {
    console.log(a * b)
}
else if (operation == 'podeli'){
    console.log(a / b)
}
};

operations(15, 10, 'podeli');