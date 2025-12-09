function operations (a, b, operation) {

if (operation == 'saberi') {
    return (a + b)
}
else if (operation == 'oduzmi') {
    return (a - b)
}
else if (operation == 'pomnozi') {
    return (a * b)
}
else if (operation == 'podeli'){
    return (a / b)
}
};

console.log(operations(15, 10, 'podeli'))