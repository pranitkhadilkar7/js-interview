function areThereDuplicate(...arr) {
    const set = new Set()
    for (let el of arr) {
        if (set.has(el)) {
            return true
        }
        set.add(el)
    }
    return false
}

console.log(areThereDuplicate(1,2,1))

