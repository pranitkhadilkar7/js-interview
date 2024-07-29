function maxSubarraySum(arr, n) {
    if (arr.length < n) {
        return null
    }

    let sum = 0
    let curSum = 0

    for (let i = 0; i < n; i++) {
        curSum += arr[i]
    }

    sum = curSum

    for (let i = n; i < arr.length; i++) {
        curSum = curSum - arr[i-n] + arr[i]
        if (curSum > sum) {
            sum = curSum
        }
    }

    return sum
}

console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))