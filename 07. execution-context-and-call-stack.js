// what is execution context?
// It is an environment in which a piece of JS code is executed.
// It stores all the necessary info required to that piece of code to get executed


// For each function call, execution context gets created
// JS create global execution context for top level code
// after that it create execution context for each function call
// these execution context are kept in the call stack for execution. (on one another)
// at the base there will always be global exection context

// each execution context has the following
// 1. Variable environment
    // all the let, const and var declarions inside that function
    // function declaration
    // arguments list. passed to that function
// 2. Scope Chain: This conatain reference to all parent execution context
    // this is because each function might access variables in its parent function
    // to do this we need scope chain in each execution context
/// 3. this keyword

// call stack is used to keep track of order of functions to be executed

// arrow function don't have arguments list and this keyword in their context
