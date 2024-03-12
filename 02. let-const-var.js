let age = 35
age = 31

// variabled declared with const are immutable
// they can not be re-assigned
const birthYear = 1995
// birthYear = 1996 // Error. Can not assign to const

// const job; // Error. const declaration must be initialized

var job = 'programmer'
job = 'teacher'
// var is same as let
// only difference is
// let, const are block scoped and var is function scoped
// var will also create property in window object

lastname = 'K' 
console.log(lastname) // never do this. This will created property in global object ie window object in case of web app

console.log(this)
