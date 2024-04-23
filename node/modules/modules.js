/*
In node js exvery file is considered as module
Where does the require('test-module) comes from

Wherever node encounters require('test-module) function following steps are executed

1. Resolving and Loading:
    - First the path inside the require function gets resolved
    - if the path found in node's core module then it is resolved with that
    - if the path starts with . or .. then it is resolved with local module
    - otherwise it is resolved with 3rd party module
2. Wrapping
    - Once the path to the module is resolved, modules code is wrapped inside a function
    - (function (exports, require, module, __filename, __dirname) {
        ... module code goes here
    })
    - Because of this code inside each module is privately scoped
3. Execution
    - Code inside the module gets executed
4. Returning Exports
5. Caching
    - Used when same module is exported more that once
*/

console.log(arguments)
// this arguments will have values as mentioned in the IIFE decribed in point 2 above

console.log(require('module').wrapper)
/*[
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
  ] 
*/

// using module.exports
const Calc1 = require('./test-module-1')
const calc1 = new Calc1()
console.log(calc1.add(2, 3))
console.log(calc1.multiply(2, 3))

// using exports
const Calc2 = require('./test-module-2')
console.log(Calc2.add(2, 3))
console.log(Calc2.multiply(2, 3))

// Caching
require('./test-module-3')()
require('./test-module-3')()
require('./test-module-3')()
// This is the code inside module
// Log this beautiful text
// Log this beautiful text
// Log this beautiful text

