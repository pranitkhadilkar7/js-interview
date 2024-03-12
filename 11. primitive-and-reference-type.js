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


