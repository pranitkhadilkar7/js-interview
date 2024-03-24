// The Promise object represents the eventual completion or failure of asynchronouse task
// and its resulting value

// A promise has following states
// 1. Pending: initial state, neither fulfilled nor rejected
// 2. Fulfilled: meaning that the operation was completed successfully
// 3. Rejected: meaning that the operation was failed



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejecting promise1')
    }, 1000)
})


promise1.then((res) => {
    console.log(res)
}, (err) => {
    console.log(`Inside of then reject hanlded ${err}`) // this gets executed when we reject promise1
}).catch((err) => {
    console.log(`Inside of catch reject hanlded ${err}`) // this gets executed only when we do not have error handling in then aboev
})

