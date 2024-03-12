// function declaration
// this is function without a name
// also called as anonymous function
// function declaration can be called before declaring it
// calcAge1(1995) here is valid and will return 29

console.log(calcAge1(1995))
function calcAge1 (birthYear) {
    return 2024 - birthYear
}
console.log(calcAge1(1995))

// function expression
// named functions
// console.log(calcAge2(1995)). This gives error. can not access before initialization
const calcAge2 = function (birthYear) {
    return 2024 - birthYear
}

console.log(calcAge2(1995))
