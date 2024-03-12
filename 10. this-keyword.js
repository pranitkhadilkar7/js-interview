// "this" is a special veriable created for eaacj execution context (every function)
// "this" takes the value of the owner of the function

// "this" is not static. It's value depends on how the function is gettin called

// consider following cases of function call

// 1. Method: Object that is calling the method
    // this will have value of object calling the method
    'use strict'
    const pranit = {
        firstName: 'Pranit',
        lastName: 'K',
        year: 1995,
        calcAge: function () {
            console.log(this) // points to pranit obj
            const age =  2024 - this.year
            const print = () => {
                console.log(`${this.firstName} is ${age}`) // works fine
            }
        },
        greet: () => {console.log(`Hey, ${this.firstName}`)} // prints Hey undefined
    }
    
    const rohit = {
        firstName: 'Rohit',
        year: 1996,
    }
    
    rohit.calcAge = pranit.calcAge
    // console.log(rohit.calcAge()) --> runs successfully
    const f = rohit.calcAge
    // f() --> gives error
    
    // 2. Simple Function call: 
        // this will be undefined for strict mode and window object for loose mode
    function calcAge (birthYear) {
        console.log(this) //  undefined
    }
    
    // 3. Arrow function call:
        // this will point the this of surrounding function
    const calcAgeArrow = (birthYear) => {
        console.log(this) // window object
    }
    
    // 4. event listener:
        // this point to the DOM element the handler is attached to
    
    