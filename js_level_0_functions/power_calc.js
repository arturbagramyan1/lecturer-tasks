// 14. Power Calculation
// Write a JavaScript function that calculates the result of raising a given base to a given exponent (don’t use built-in operators).



function powerCalc(base, exponent) {
    if (exponent === 0) {
        return 1
    }
    return base * powerCalc(base, exponent - 1)
}