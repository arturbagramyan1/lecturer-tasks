
// 12. Write a Function to Check Palindrome Strings
// Write a function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same backward as forward) and false otherwise.



function isPalindrome(str) {
    str = str.toLowerCase()
    console.log(str)
    return str === str.split('').reverse().join('')
}

console.log(isPalindrome('Anna'))