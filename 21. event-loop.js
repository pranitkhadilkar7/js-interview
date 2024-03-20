// Every JS runtime contains Web API Env in which all the async tasks related to web takes place
// it contains callback of all the event listeners (click, hover, load) and call back of all the promises
// Whenever the callback of event listener is ready to be executed JS runtime puts it into the callback queue
// and whenever the call of promise is ready to be executed JS runtime puts it into the microtasks queue 
// 
// Event loop in JS runtime is a program which constantly monitor callstack in JS engine
// As soon as the callstack is empty or it contains only global execution context
// event loop checks microtasks queue first for callback of promises and if it conatins any function
// then event loop places it into the callstack to get executed
// event loops checks callback queue only if microtasks queue and callstack is empty (only contains global execution context)
// and it it finds any function then it places it into the callstack


console.log('Test start')
setTimeout(() => {
    console.log('Inside set timeout')
}, 0)
Promise.resolve('Resolved Promise 1').then(res => console.log(res))

Promise.resolve('Resolved Promise 2').then(res => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log(res)
})
console.log('Test end')

// output for above code
// Test start
// Test end
// Resolved Promise 1
// Resolved Promise 2
// Inside set timeout