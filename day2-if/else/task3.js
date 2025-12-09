function valueType (value) {
    
    console.log(value === "number" ? 'Value is a number' : 'Value is not number, it is a ' + typeof value)
}


valueType(5);
valueType(true);
valueType("Cow");