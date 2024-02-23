// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let object = {}
//   let max = 0
//   let key = ""
//   str.split("").forEach((char) => {
//     object[char] = object[char] + 1 || 1
//   })

//   for (const char in object) {
//     if (object[char] > max) {
//       max = object[char]
//       key = char
//     }
//   }
//   return key
// }

module.exports = maxChar

// #1 solution
function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ""

  // for array or string => for of
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}
