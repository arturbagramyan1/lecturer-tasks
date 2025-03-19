// 3. Fix the Function to Handle Edge Case

function divide(a, b) {
    if (b === 0) return "Can't divide by 0"
    return a / b;
}
console.log(divide(10, 0));