// every function has the access of variable in the execution context in which that function is created
// even after that execution context is gone
// this is nothing but a closure

function securebooking () {
    let passengerCount = 0

    return function () {
        passengerCount++
        console.log(`${passengerCount} passenger`)
    }
}

const book = securebooking()


book() // 1 passenger
book() // 2 passenger
book() // 3 passenger

let f

const g = function () {
    const a = 23
    f = function () {
        console.log(a * 2)
    }
}

const h = function () {
    const b = 50
    f = function () {
        console.log(b * 2)
    }
}

g()
f() // 46

h()
f() // 100

const i = function (wait) {
    const firstName = 'Pranit'
    setTimeout(function () {
        console.log(`Run after waiting ${wait} seconds for ${firstName}`) // runs with Pranit
    }, 1000 * wait)

    console.log('This runs immedietly')
}
const firstName = 'Rohit'
i(3)