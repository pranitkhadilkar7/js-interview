// call method immediately calls the function.
// First parameter to call method is the this object

const A = {
    arr: [],
    addToArr (el) {
        this.arr.push(el)
    }
}

const B = {
    arr: []
}

A.addToArr.call(B, 'BForst')
A.addToArr('first')

// apply also calls the functoin immedietly
// first parameter to apply is this object and second parameter is an array of params function accepts

A.addToArr.apply(B, ['BSec'])

// bind returns a new function with binded parameter
// it does not call the function immedietly

const addToArr_B = A.addToArr.bind(B)

addToArr_B('BThird')

console.log(A)
console.log(B)