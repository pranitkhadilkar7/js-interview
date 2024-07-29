// there are 2 equal operators
// === and ==
// === is strict equal. It does not do type coherison. It validates value and type
// == is loose equal. It does type cohersion

console.log(18 === 18) // true
console.log('18' === 18) // false
console.log(18 == 18) // true
console.log('18' == 18) // true. because '18' is converted to integer 18 before comparing