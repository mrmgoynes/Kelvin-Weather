// Initializing the Kelvin variable
const Kelvin = 0;
console.log(`Today's forecast in Kelvin is ${Kelvin} degrees.`);

// Converting Kelvin to Celsius
let celsius = Kelvin - 273;
console.log(celsius);

// Calculating Fahrenheit
var fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

// Rounding down the Fahrenheit temperature
var fahrenheit = (Math.floor(fahrenheit));
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log('EXTRA PRACTICE');

// Convert to Newton
var newton = celsius * (33 / 100);
console.log(newton);

// Round down
newton = (Math.floor(newton));

// Logging approximation to the console
console.log(`The temperature in Newtons is about ${newton} degrees Newton.`);
