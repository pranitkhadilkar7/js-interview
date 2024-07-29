function reverse(str) {
    if (str.length <= 0) return str
    return reverse(str.slice(1)) + str[0]
}

function isPalindrome(str) {
    const reverse = reverse(str)
    if (reverse === str) return true
    return false
}