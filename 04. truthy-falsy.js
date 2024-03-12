// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('Truthy')) // true
console.log(Boolean({})) // true

const money = 0

if (money) {
    console.log("Don't spend it all")
} else {
    console.log('Get a Job') // this will be printed as 0 is falsy
}