// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let value = 0
//   for (const key of str.toUpperCase().split("")) {
//     if (
//       key === "A" ||
//       key === "E" ||
//       key === "I" ||
//       key === "O" ||
//       key === "U"
//     ) {
//       value += 1
//     }
//   }
//   return value
// }

// # 1 solution
// function vowels(str) {
//   let count = 0
//   let checker = ["a", "e", "i", "o", "u"]

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++
//     }
//   }
//   return count
// }
// # 2 solution
function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels
