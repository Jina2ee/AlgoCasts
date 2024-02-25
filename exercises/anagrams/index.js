// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function MakeObject(str) {
//   let object = {}
//   for (const char of str) {
//     if (!object[char]) {
//       object[char] = 1
//     } else {
//       object[char]++
//     }
//   }
//   return object
// }

// function compare(a, b) {
//   if (a.length !== b.length) return false
//   else if (a.length === b.length) {
//     let array = []
//     a.forEach((ele) => {
//       b.forEach((ble, i) => {
//         if (b[i][0] === ele[0] && b[i][1] === ele[1]) {
//           console.log(b[i][0], ele[0])
//           return array.push(true)
//         }
//       })
//     })
//     return array.length === a.length ? true : false
//   }
// }

// function anagrams(stringA, stringB) {
//   let strA = stringA.replace(/[^\w]/g, "").toLowerCase()
//   let strB = stringB.replace(/[^\w]/g, "").toLowerCase()
//   let strAObject = Object.entries(MakeObject(strA))
//   let strBObject = Object.entries(MakeObject(strB))

//   let value = compare(strAObject, strBObject)
//   return value
// }

// #1 solution
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }

//   for (const char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }

//   return true
// }

// function buildCharMap(str) {
//   const charMap = {}

//   for (const char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

// # 2 solution
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

module.exports = anagrams

// /[^\w]/g
// toLowerCase()
