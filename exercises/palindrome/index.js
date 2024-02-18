// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   //1 (#1 same as a frist solution )
//   // return str.split("").reverse().join("") === str
//   //2
//   //   let reversed = ""
//   //   for (const char of str) {
//   //     reversed = char + reversed
//   //   }
//   //   return reversed === str
//   //3
//   const reversed = str.split("").reduce((rev, char) => char + rev, "")
//   return reversed === str
// }

// #2 solution
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1]
  })
}
module.exports = palindrome
