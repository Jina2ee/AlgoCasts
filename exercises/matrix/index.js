// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create empty array of arrays called "results"
  const results = []
  for (let i = 0; i < n; i++) {
    results.push([])
  }
  // create a counter variable, starting at 1
  let counter = 1
  // As long as (start column <= end column) AND (start row <= end row)
  let startColumn = 0
  let endColumn = n - 1
  let startRow = 0
  let endRow = n - 1
  // Loop from start column to end column
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    // At result[start_row][i] assign counter variable
    // increment counter
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter
      counter++
    }
    // Increment start row
    startRow++
    // Right column
    // Loop from start row to end row
    // At result[i][end_column] assign counter variable
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter
      // Incrementer counter
      counter++
    }
    endColumn--

    // Bottom row
    // Decrementer end row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter
      counter++
    }
    endRow--

    // repeat for other two sides
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter
      counter++
    }
    startColumn++
  }
  return results
}

module.exports = matrix
