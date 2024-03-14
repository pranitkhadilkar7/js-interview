// these are the functions which are invoked only once

(function () {
    console.log('This is IIFE. This will never run again')
})();

(() => console.log("This is IIFE with arrow function. This will never run again"))();