// 9. What will be logged?

function outer() {
    let count = 1;
    function inner() {
        return count++;
    }
    return inner;
}
let counter = outer();
console.log(counter()); // What will be logged?
console.log(counter()); // What will be logged?


// 1,2 because we are returning count and then  incrementing it 