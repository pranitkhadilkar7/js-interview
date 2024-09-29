function f1 () {
    console.log(arguments[0]) // print 1
}

console.log(f1(1, 2, 3, 4))


const f2 = () => {
    console.log(arguments[1]) // print some obj. arguments here is not the one we passed below
}

console.log(f2(1, 2, 3, 4))

const f3 = function () {
    console.log(arguments[1]) // print 2
}

console.log(f3(1, 2, 3, 4))