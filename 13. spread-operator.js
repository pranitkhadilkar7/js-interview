// it is used to expand array, string or object

const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]

console.log(arr2) // [1, 2, 3, 4, 5]
console.log(...arr2) // 1 2 3 4 5