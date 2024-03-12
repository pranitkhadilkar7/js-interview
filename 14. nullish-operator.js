// Nullish: null and undefined
console.log(null ?? 'pk') // pk
console.log(undefined ?? 'pk') // pk
console.log(0 ?? 'ok') // 0

console.log(0 || 10) // 10
console.log(10 || 0) // 10
console.log(undefined || 10) // 10
console.log(10 || null) // 10
console.log(10 || 12) // 10
console.log(undefined || null) // null

console.log(0 && 10) // 0
console.log(10 && 0) // 0
console.log(undefined && 10) // undefined
console.log(10 && null) // null
console.log(10 && 12) // 12
console.log(undefined && null) // undefined