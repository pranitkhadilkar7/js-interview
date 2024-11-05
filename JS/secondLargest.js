function getSecondLargestElement (arr) {
    if (arr.length < 2) {
        return null
    }
    let largest = arr[0]
    let secondLargest = arr[0]
    for (let el of arr) {
        if (el > largest) {
            secondLargest = largest
            largest = el
        } else if (el > secondLargest && el < largest) {
            secondLargest = el
        }
    }
    return secondLargest
}

console.log(getSecondLargestElement([1,2,3,4,5])) // 4
console.log(getSecondLargestElement([1])) // null
console.log(getSecondLargestElement([1,1,1,1])) // 1
console.log(getSecondLargestElement([1,2,1,2])) // 1

