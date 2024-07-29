function validAnagram (str1, str2) {
    if (str1.length !== str2.length) return false

    const freq1 = {}
    const freq2 = {}

    for (let i = 0; i < str1.length; i++) {
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1
    }

    for (let i = 0; i < str2.length; i++) {
        freq2[str2[i]] = (freq2[str2[i]] || 0) + 1
    }

    for (const key in freq1) {
        if (!freq2[key]) {
            return false
        }
        if (freq1[key] !== freq2[key]) {
            return false
        }
    }

    return true
}

console.log(validAnagram('texttwisttime', 'timetwisttext'))