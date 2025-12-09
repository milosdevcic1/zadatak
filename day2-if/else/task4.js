let date = new Date().getMonth() + 1;

if (date >= 1 && date <= 3) {
    console.log("This is first quarter, it's Winter")
}
else if (date <= 6) {
    console.log("This is second quarter, it's Spring")
}
else if (date <= 9) {
    console.log("This is third quarter, it's Summer")
}
else if (date <= 12) {
    console.log("This is fourth quarter, it's Autumn")
};