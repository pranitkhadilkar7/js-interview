function areThereDuplicate(...arr) {
    const obj = {}
    for (let el of arr) {
        if (obj[el]) {
            return true
        }
        obj[el] = 'present'
    }
    return false
}

console.log(areThereDuplicate(1,2,1))

