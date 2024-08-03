// Below are the refernce type or object literal
// object
// array
// function etc

// object literal are stored in Heap memory of js engine
// they are accessed with reference
// primitive type is stored in callstack

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    family: ['Rayn', 'Chris']
}

// const jessicaCopy = Object.assign({}, jessica) // this does shallow copy. it does not copy nesting obj
// const jessicaCopy = {...jessica} --> this also does the shallow copy
const jessicaCopy = JSON.parse(JSON.stringify(jessica)) // this does the deep copy
jessicaCopy.lastName = 'Devis'
jessicaCopy.family.push('Yemi', 'Gbemi')

console.log('Before Marriage', jessica)
console.log('After Marriage', jessicaCopy)

// Primitive Vs Reference
// In JS values are classified in 2 types ie Primitive and Reference.
// To understand the difference between them we have understand how they are stored and manupulated

// Primitive: These are immutable. Meaning they can can be changed once created. You directly work with values
// Primitives are stored in stack memory which is fast and efficient
// number
// string
// undefined
// boolean
// null

// Reference: We are working with reference and not the value itself. They can be changed.
// They are stored in heap memory
// Objects
// Arrays
// Functions
// Date


// Key Differences
// Immutability vs. Mutability:
// Primitive types are immutable.
// Reference types are mutable.

// Memory Storage:
// Primitive types are stored by value in the stack.
// Reference types are stored by reference in the heap.

// Assignment and Passing:
// Assigning or passing a primitive type copies the actual value.
// Assigning or passing a reference type copies the reference to the value.


