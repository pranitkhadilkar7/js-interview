// Hoisting makes some kind of variables accessible/usable even before they are declared
// Before execution, code is scanned for variable declaration (in the execution context creation phase)
// and for each variable a new property is created in the execution contexts variable environment

// Follow below data for hoisting

// 1. function declaration
    // hoisted: true
    // initial value: set to function itself
    // scope: block for strict mode and finction for loose mode
    // hence we can call function declaration before even delcaring it
calcAge(1995)
function calcAge (birthYear) {
    return 2024 - birthYear
}

// 2. variable declared with var
    // hoisted: true
    // initial value: set to undefined
    // scope: function scope
    // you can access the variables declared with var before it is declared, but the value will be undefined
console.log(age) // prints undefined
var age = 29

// 3. variabled declared with let, const
    // hoisted: false
    // initial value: they are uninitialized. Hence accessing them before delcaring gives error because they are kep in "temporal dead zone"
    // scope: block
// console.log(firstName) // gives error
let firstName = 'Pranit'

// 4. function expression and arrow function
    // hoisted: true if declared with var, false if declared with let or const
    // initial value: undefined if declared with var, uninitialized if declared with let or const
    // scope: function scoped if declared with var, block scoped if declared with let or const

// Temporal dead zone makes it easier to catch error when we use variabled before declaring

// In JavaScript, the Temporal Dead Zone (TDZ) refers to the period between when a variable is declared and when it’s initialized. During this time, 
// the variable exists but cannot be accessed, which results in a ReferenceError if you try to use it. The TDZ primarily affects variables declared with let and const.
console.log(myVar); // undefined (var is hoisted)
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization

var myVar = "Hello";  // myVar is hoisted with 'undefined' as initial value
let myLet = "World";  // myLet enters TDZ until this line
const myConst = "JS"; // myConst enters TDZ until this line

// Explanation
// var myVar: When we declare myVar with var, it is hoisted to the top of its scope and initialized with undefined. So, if we try to access it before its declaration, 
// it won’t throw an error; it will just return undefined.

// let myLet and const myConst: Both let and const are also hoisted, but they do not get initialized until their declaration line is reached. 
// This period (from the beginning of the scope until the variable's initialization) is the Temporal Dead Zone. During this period, accessing 
//     myLet or myConst will result in a ReferenceError.

// Why the TDZ Exists
// The TDZ was introduced to encourage better coding practices by avoiding the use of uninitialized variables. With var, 
// unintentional undefined values could lead to bugs, while the TDZ makes it clear that variables must be declared before they’re used.

// Understanding the TDZ helps ensure that code is written with an awareness of variable lifetimes, especially when working with let and const!
