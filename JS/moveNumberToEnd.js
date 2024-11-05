function moveNumberToEnd (arr, num = 0) {
    let start, end

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            start = i
            end = i
            break
        }
    }

    while(end < arr.length) {
        if (arr[end] === num) {
            end++
        } else {
            arr[start] = arr[end]
            arr[end] = num
            end++
            start++
        }
    }

    console.log(arr)
}

moveNumberToEnd([0, 1, 0, 3, 12])
moveNumberToEnd([0, 0, 0, 0, 0])
moveNumberToEnd([1, 2, 3, 4, 5])
moveNumberToEnd([4, 2, 0, 1, 0, 3, 0])
moveNumberToEnd([0, -1, 0, -3, -12])
moveNumberToEnd([])