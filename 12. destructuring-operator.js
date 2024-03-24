// Array destructuring
// used for unwrapping the array

'use strict'

const restuarant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Travanti 23, Roma, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegiterian', 'Oraganic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}

const arr = [1, 2, 3]
const [x, y, z] = arr
console.log(x, y, z) // 1 2 3

let [main, , secondary] = restuarant.categories
console.log(main, secondary) // Italian Vegiterian

// switching
// [main, secondary] = [secondary, main]
// console.log(main, secondary)

const nested = [2, 3, [4, 5]]
const [i, , j] = nested
const [a, ,[b,c]] = nested
console.log(i, j) // 2 [4, 5]
console.log(a, b, c) // 2 4 5

// default value
const [p, q, r] = [6, 7]
console.log(p, q, r) // 6 7 undefined
const [l = 0, m, n = 0] = [6, 7]
console.log(l, m, n) // 6 7 0

// similarly object destructuring is used
