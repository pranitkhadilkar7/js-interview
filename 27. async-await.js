// Before async wait we used below 3 ways to handle async code

// 1. Callbacks

// example: 
function test () {}
function doSomething (callback) {
    // some logic
    callback();
}
doSomething(test);

// drawbacks:
// Human mind can't understand callback well
// To understand the code execution sequence we need go inside each function

// 2. setTimeout

// example:
setTimeout(() => {
    console.log('Hello');
    test()
}, 1000);

// drawbacks:
// Hard to understand the code execution sequence

// 3. Promises

// example:
Promise.resolve('Hello').then((data) => {
    Promise.resolve(data).then((data) => {
        console.log(data);
        test();
    })
})

// drawbacks:
// Hard to understand the code execution sequence
// callback hell



// Async Await gives us a way to write async code in a synchronous way
// It's just a syntactic sugar over promises
// It makes code more readable and easy to understand

function fakeAxios () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data');
        }, 2000);
    })
}

fakeAxios.then(data => {
    console.log(data);
})

async function getData() {
    const data = await fakeAxios();
    console.log(data);
}

// What does async function do?
// 1. It makes the function use await keyword
// 2. It makes the function return a resolved promise event if it doesn't return anything
// 3. It gives signal to JS engine to create a special function to manage this flow

async function getData2() {
    return 1
}

console.log( // Logs a promise
    getData2().then(data => {
        console.log(data); // 1
    })
)


// What does await do?
// 1. Wraps the awaited value in a promise
// 2. Attaches handler to give control back to the pending code
async function getData3() {
    const data = await 1; // createPromise(1)
    console.log(data);
}

// Some Demo

(async function () {
    const data = await 4
    console.log(data);
})()
console.log('Hello');
// Output:
// Hello
// 4


// Error handling in async await
// 1. try catch
// 2. .catch
// 3. Utility async function

// We can create a unitlity function to handle error in async await
async function myAsync(callback) {
    try {
        const data = await fakeAxios2();
        return [data, null];
    } catch (e) {
        return [null, e];
    }
}

function fakeAxios2 () {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Error');
        }, 2000);
    })
}

async function getData4() {
    try {
        const data = await fakeAxios2().catch(e => {console.log(e)});
        console.log(data);
    } catch (e) {
        console.log(e);
    }

    try {
        const data = await fakeAxios2();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}


// Top level await

// This is introduced in ES8