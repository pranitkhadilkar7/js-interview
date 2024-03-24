// A polyfill is piece of code usually written in javascript that provide implementation 
// of a feature or functionality in web browser that do not natively support it.

// Polyfill is used to bridge the gap between older browser and newer standards or 
// features introduced in JS

// let say a developer want's to use new functionality introduced in ES6
// but also need to support it on older browser then developer can include
// or write polyfill for that method so that it will behave consistently across
// all the browser

// polyfill for forEach


Array.prototype.forEach = function (callback, thisArg) {
    if (this == null ) {
        throw new TypeError('Array.prototype.forEach called on null or undefined')
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const array = Object(this)
    const length = array.length ?? 0
    const context = thisArg

    for (let i = 0; i < length; i++) {
        callback.call(context, array[i], i, array)
    }
}