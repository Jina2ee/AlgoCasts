// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function buildPounds(number) {
//   let array = []
//   for (let i = 0; i < number; i++) {
//     array.push("#")
//   }
//   return array
// }

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let pounds = buildPounds(i).join("")
//     let empties = new Array(n - i + 1).join(" ")
//     console.log(pounds + empties)
//   }
// }
// # 1 solution
// function steps(n) {
//   // From 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // create an empty string, "stair"
//     let stair = ""
//     // From 0 to n (iterate through columns)
//     for (let column = 0; column < n; column++) {
//       // If the current column is equal to or less than the current row
//       if (column <= row) {
//         // Add a "#" to stair
//         stair += "#"
//       } else {
//         // Add a space to stair
//         stair += " "
//       }
//     }
//     // console log 'stair'
//     console.log(stair)
//   }
// }
// # 2 solution
function steps(n, row = 0, stair = "") {
  // if (row === n) then we have hit the end of our problem
  if (n === row) {
    return
  }

  // if the 'stiar' string has a length === n then we are at the end of the row
  if (n === stair.length) {
    console.log(stair)
    steps(n, row + 1)
    return
  }

  // if the length of the string is less than or equal to the row number we're working on,
  // we add "#", otherwise odd a space
  const add = stair.length <= row ? "#" : " "

  steps(n, row, stair + add)
}

module.exports = steps
