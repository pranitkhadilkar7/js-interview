let age = 35
age = 31

// variabled declared with const are immutable
// they can not be re-assigned
const birthYear = 1995
// birthYear = 1996 // Error. Can not assign to const

// const job; // Error. const declaration must be initialized

var job = 'programmer'
job = 'teacher'
// var is same as let
// only difference is
// let, const are block scoped and var is function scoped
// var will also create property in window object

lastname = 'K' 
console.log(lastname) // never do this. This will created property in global object ie window object in case of web app

console.log(this)


// block and function scope
{
    let x = 10; // x is only accessible within this block
    const y = 20; // y is also block-scoped
    console.log(x); // 10
    console.log(y); // 20
  }
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // ReferenceError: y is not defined

  function myFunction() {
    var z = 30; // z is function-scoped
    if (true) {
      var w = 40; // w is also accessible throughout the entire function, not just in this block
    }
    console.log(z); // 30
    console.log(w); // 40
  }
  myFunction();
  console.log(z); // ReferenceError: z is not defined
  console.log(w); // ReferenceError: w is not defined


  function anotherFunction() {
    var a = 1; // function-scoped
    let b = 2; // block-scoped
    if (true) {
      var a = 3; // same function scope, so this overwrites the previous a
      let b = 4; // block-scoped, only accessible in this block
      console.log(a); // 3
      console.log(b); // 4
    }
    console.log(a); // 3 (a was overwritten in the if block)
    console.log(b); // 2 (b is still 2 outside the block)
  }
  
  anotherFunction();
  