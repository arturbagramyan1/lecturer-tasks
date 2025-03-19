
// 15. What will be returned, and why?



console.log((() => () => 1)())


// output will be [Function (anonymous)] because we are returning a function and not calling it.