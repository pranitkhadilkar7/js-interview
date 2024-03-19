// js engine is a program that runs js code
// every browser has js engine on which js code runs
// google's v8 engine is the most used engine
// this engine contains 2 components
// 1. call stack --> where js code runs using execution context
// 2. heap --> this is a memory to store objects required in running js


// compilation vs interpretation vs just-in-time compilation
// 1. Compilation: Entire source code is converted to Machine code and then run it is execulated later point in time
// 2. Interpretation: Code is converted to machine code and then immediately executed line by line. convertion to machine code and exution happens line by line. This is slow
// 3. Just in time Compilation: Entire source code converted to machine code as once and then executed immadiately

// In JS engine following steps happen
// 1. Parsing --> code is read line by line and then converted to AST datastructure
// 2. Compilation --> code is converted into machine code
// 3. Execution --> happens immediately after compilation in call stack

// runtime is a combination of js engine and web api and callback queue (DOM, Timers, Fetch API etc)