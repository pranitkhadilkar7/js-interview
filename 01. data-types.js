// 1. Number: Floating point numbers. Used for decimals and integers
let num = 23

// 2. String: Sequence of characteres. Used for text
let str = 'String'

// 3. boolean: Logical type that can be true or false
let bool = true

// 4. undefined: Value taken by variable that is not yet initialized
let unde; // if we console.log(unde) it will be undefined

// 5. null: Specifies empty value

// 6. Symbol: Defined in ES2015. Value that is unique and can not be changed

// 7. BigInt: Larger integres than the Number can hold

// Javascript is dynamically typed language. A variable won't have any type.
// Instead the value assiged to variable will give type to that variable

let javascriptIsFun = true

console.log(typeof javascriptIsFun) // boolean
console.log(typeof true) // boolean
console.log(typeof 25) // number
console.log(typeof 'Pranit') // string

javascriptIsFun = 'YES!'

console.log(typeof javascriptIsFun) // string

let year;
console.log(year) // undefined
console.log(typeof year) // undefined

console.log(typeof null) // object. This is a bug in JS

// console.log({} === {}) // false
console.log(null === null) // true
console.log(undefined === undefined) // true
