'use strict'

function calcAge (birthYear) {
    const age = 2024 - birthYear

    function printAge () {
        const output = `${firstName}, you are ${age}, born in ${birthYear}` // dont give error
        console.log(output)

        if (birthYear >= 1981 && birthYear <- 1996) {
            const firstName = 'Steve'
            var millenial = true
            const str = `Oh, and you are millenial, ${firstName}` // this will print Steve as this veriable is available in current scope and no need to check in global scope
            console.log(str)
        }
        // console.log(str) --> this gives error as str is declared with const which is block scoped. if declared with var then it wont give error
        console.log(millenial) // it won't give error
    }
}

const firstName = 'Pranit'

// console.log(age) gives error as age is not in the current or parent scope
// printAge() gives error as printAge is not in the current or parent scope