const fs = require('fs')
const crypto = require('crypto') // all the operation from this package will be handled in the thread pool

const start = Date.now()

process.env.UV_THREADPOOL_SIZE = 1 // by default we will have 4 thread pools. We are restricting it to 1

setImmediate(() => {console.log('Immediate 1 finished')})
setTimeout(() => {console.log('Timer 1 finished')}, 0)

fs.readFile(`${__dirname}/text.txt`, 'utf-8', (err, data) => {
    console.log('I/O operation')
    setTimeout(() => {console.log('Timer 2 finished')}, 0)
    setTimeout(() => {console.log('Timer 3 finished')}, 3000)
    setImmediate(() => {console.log('Immediate 2 finished')})

    process.nextTick(() => {console.log('process.nextTick callback')})
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, 'Password encrypted')
    })
})


console.log('Hello from top level code')

// output: for 4 thread pool: see the time for required for password encryption
// Hello from top level code
// Timer 1 finished
// Immediate 1 finished
// I/O operation
// process.nextTick callback
// Immediate 2 finished
// Timer 2 finished
// 1468 Password encrypted
// 1470 Password encrypted
// 1475 Password encrypted
// Timer 3 finished

// output: for 1 thread pool: see the time for required for password encryption
// Hello from top level code
// Timer 1 finished
// Immediate 1 finished
// I/O operation
// process.nextTick callback
// Immediate 2 finished
// Timer 2 finished
// 1874 Password encrypted
// Timer 3 finished
// 3802 Password encrypted
// 5752 Password encrypted
