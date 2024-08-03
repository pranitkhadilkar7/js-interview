// Currying in a technique in JS in which we transfer a function
// taking multiple arguments into a sequence of function taking multiple arguments

function sum (a, b, b) {
    return a + b + c
}

function sumCur (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}