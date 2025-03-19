

// 13. Leap Year Check
// Write a JavaScript function that determines whether a given year is a leap year or not. A leap year is a year that is divisible by 4 but not divisible by 100 unless it is also divisible by 400.



function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    } else {
        return false
    }
}