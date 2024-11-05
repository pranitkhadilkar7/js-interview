// First class function is just a fact that function are just type of object

const add = (a, b) => a + b

console.log(typeof add) // function

// In JavaScript, a higher-order function is a function that either:
// Takes one or more functions as arguments, or
// Returns a function as its result.

// Higher-order function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Functions to pass as arguments
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using the higher-order function
const sum = applyOperation(5, 3, add); // sum is 8
const product = applyOperation(5, 3, multiply); // product is 15

console.log("Sum:", sum); // Output: Sum: 8
console.log("Product:", product); // Output: Product: 15


const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Using filter to get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Using reduce to sum all numbers
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // Output: 15
