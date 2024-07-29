function reverseArray(arr) {
    if (arr.length === 0) return arr
    return reverseArray(arr.slice(1)).concat([arr[0]])
}

function reverseTheString(str) {
    return reverseArray(str.split(/\s+/)).join(' ')
}

console.log(reverseTheString('the sky is blue'))