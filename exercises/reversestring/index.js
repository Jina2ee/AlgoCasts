// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reverse().join("")
}

// // #1 solution
// function reverse(str) {
//   return str.split("").reverse().join("")
// }
// #2 solution
// function reverse(str) {
//   let reversed = ""

//   for (const character of str) {
//     reversed = character + reversed
//     // debugger
//   }
//   return reversed
// }

// #3 solution
// function reverse(str) {
//   // debugger
//   return str.split("").reduce((rev, char) => char + rev, "")
// }

// reverse("asdf")
module.exports = reverse

// debugger
// node inspect filename
// c : continue
// repl
// possible testing your data inside function
