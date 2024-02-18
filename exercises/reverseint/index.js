// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let reversed = n.toString().split("").reverse()
//   if (reversed.includes("-")) {
//     reversed = reversed.filter((char) => {
//       if (char !== "-") {
//         return char
//       }
//     })
//     reversed = ["-", ...reversed]
//   }
//   return reversed.join("") * 1
// }

// // #1 solution
// function reverseInt(n) {
//   let reversed = n.toString().split("").reverse().join("")
//   if (n < 0) {
//     return parseInt(reversed) * -1
//   }
//   return parseInt(reversed)
// }
// #2 solution
function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("")

  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt
