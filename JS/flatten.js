// Write a recursive function called flatten
// which accepts an array of arrays and returns
// a new array with all values flattened.

const data = [1, 2, 3, 4, [5, 6, [7, 8], 9, 10], [11, 12]]

function flatten(arr) {
    let result = []
    for (let el of arr) {
        if (Array.isArray(el)) {
            result = [...result, ...flatten(el)]
        } else {
            result.push(el)
        }
    }
    return result
}