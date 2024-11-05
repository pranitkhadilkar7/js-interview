function maxRepeatingCharater (str) {
    let obj = {}
    let ch = ''
    let max = 0

    for (let ch of str) {
        obj[ch] = (obj[ch] || 0) + 1
    }

    for (let key in obj) {
        if (obj[key] > max) {
            ch = key
            max = obj[key]
        }
    }

    return {ch, max}
}

console.log(maxRepeatingCharater('thisishowwedoit')) // i
console.log(maxRepeatingCharater('pranrrrritkhadilkar')) // r