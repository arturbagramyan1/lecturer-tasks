// 11. Write a Function to Calculate Factorial
// Write a function named factorial that takes a single number n and returns its factorial. The factorial of a number is the product of all positive integers less than or equal to n.


function factorial(num) {
    if (num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(5))