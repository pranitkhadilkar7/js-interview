// these are the functions which are invoked only once

(function () {
    console.log('This is IIFE. This will never run again')
})();

(() => console.log("This is IIFE with arrow function. This will never run again"))();

// Use Cases of IIFE

// Avoiding Global Variable Pollution: Variables inside an IIFE are scoped to the function itself, so they don’t pollute the global scope.
(function() {
    const secret = "I’m a local variable!";
    console.log(secret); // Output: I’m a local variable!
})();

console.log(secret); // Error: secret is not defined


// Creating Module-Like Structures: Before the advent of ES6 modules, IIFEs were commonly used to create modular code structures in JavaScript.
const counterModule = (function() {
    let counter = 0;

    return {
        increment: function() {
            counter++;
            console.log(counter);
        },
        reset: function() {
            counter = 0;
            console.log("Counter reset");
        }
    };
})();

counterModule.increment(); // Output: 1
counterModule.increment(); // Output: 2
counterModule.reset();     // Output: Counter reset

// Running Initialization Code: IIFEs can be used to run setup or initialization code that only needs to execute once.
