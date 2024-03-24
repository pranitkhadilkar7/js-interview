// The Object.freeze() static method freezes an object
// Freezing an object prevents extension and makes existing properties
// non-writable and non-configurable
// A frozen object can no longer be changes: new properties can not be added
// existing value can not be removed 


const obj = {
    prop: 36
}

Object.freeze(obj)

obj.prop = 44
// This will not do anything. In strict mode this will give you error

console.log(obj.prop) // 36 is the output
