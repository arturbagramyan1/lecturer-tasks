// 6. What will be logged?


let x = 10;
function test() {
    let x = 20;
}
test();
console.log(x);

// ten will be logged because  x = 20 is block scope in function and you can't get it global scope you will get 10