function capitalCities(capitals) {
  let countryAndCity = [];
  for (let capital of capitals) {
    countryAndCity.push(`The capital of ${capital.country} is ${capital.city}`);
  }
  return countryAndCity.join("\n");
}
var capitals = [
  { country: "Italy", city: "Rome" },
  { country: "Netherlands", city: "Amsterdam" },
  { country: "Belgium", city: "Brussels" },
  { country: "Denmark", city: "Copenhagen" },
  { country: "Finland", city: "Helsinki" },
];
console.log(capitalCities(capitals));
