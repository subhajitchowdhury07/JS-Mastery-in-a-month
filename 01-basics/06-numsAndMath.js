const testNumber=78;
const testNumber1= new Number(100)
console.log(testNumber);
console.log(testNumber1);

console.log(testNumber1.toString().length)
console.log(testNumber1.toFixed(2))


const otherNumber= 823.8998
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.length);

console.log(Number.MAX_VALUE)

const PI = Math.PI;
console.log(PI);

console.log(Math);
console.log(Math.abs(-2736)); // to make a absulate value (Positive)
console.log(Math.round(23.44));  // Make a round of value 
console.log(Math.ceil(27.4));  // If after point or decimal any number exist it will take as a gretter number
console.log(Math.floor(27.4)); // it did'nt take any value after decimal
console.log(Math.pow(2, 3)); // Pow us to take power of any value 


console.log(Math.random());
console.log(Math.round(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1)) +min );