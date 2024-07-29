function findLongestSubstring(str) {
    let obj = {}
    let start = 0
    let end = 0
    let window = 0

    while (end < str.length) {
        if (!obj[str.charAt(end)]) {
            obj[str.charAt(end)] = end + 1
            end++
        } else {
            let curWindow = end - start
            window = curWindow > window ? curWindow : window
            start = obj[str.charAt(end)]
            end = obj[str.charAt(end)]
            obj = {}
        }
    }

    let curWindow = end - start
    window = curWindow > window ? curWindow : window

    return window
}

console.log(findLongestSubstring('thisishowwedoit'))