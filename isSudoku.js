// each row can only have one of 1-9
// same with column
// same with each 3x3 grid
console.clear();

let a = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

let b = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

// rows
// a[0][0]
// a[0][1],
// ... a[0][8]
// done checking first row
// check the row after
// a[1][0],

// column 1 of row 0
// a[0][0],  [row][column]
// a[1][0],
// ... a[8][0]
//when column reaches 8, reset and row++
// a[0][1],  [row][column]
// a[1][1],
// ... a[8][1]

// checking next number for each row
// a[0][0]
// a[0][1]
// a[0][2]

// when you hit column 2 => reset column back to 0 for next matrix
// row + 1,

// a[1][0]
// a[1][1]
// a[1][2]

// a[2][0]
// a[2][1]
// a[2][2]

// checked first matrix
// set a counter that'll check if 9 indexes have been counted total
// if no repeats, continue and reset counter

// second matrix going down
// a[3][0]...
// a[5][2]

// third matrix going down
// a[6][0]...
// a[8][2]

// if row is 8 set the row to 0, column +1

// fourth matrix reset at top
// a[0][3] =>
// ...
// a[2][5]

// last matrix in second section
// a[6][3]
// ...
// a[8][5]

// if row is 8 set the row to 0
// column +3

// final section top matrix
// a[0][6]
// ...
// a[2][8]

// last matrix
// a[6][6]
// ...
// a[8][8]

// counter, row, column
// start by checking each row for repeats

// to check each matrix find the pattern here for each.
// row + 1                      [r][c]
// [0][0], [0][1], [0][2],     [0][3], [0][4], [0][5],
// [1][0], [1][1], [1][2],     [1][3], [1][4], [1][5],
// [2][0], [2][1], [2][2],     [2][3], [2][4], [2][5],

// what pattern is going on here?
// row  + 0, 1, 2,
// column 0, 0, 0,

// after 3 row indexes; column + 1; with each index searched counter ++ (counter now at 3)
// row  + 0, 1, 2,
// column 1, 1, 1,

// after 3 row indexes; column + 1; with each index searched counter ++ (counter now at 6)
// row  + 0, 1, 2,
// column 2, 2, 2,

// after 3 row indexes; column + 1; with each index searched counter ++ (counter now at 9)
// if no false values =>
//

// [3][0], [3][1], [3][2],     [3][3], [3][4], [3][5],
// [4][0], [4][1], [4][2],     [3][3], [4][4], [1][5],
// [5][0], [5][1], [5][2],     [4][3], [5][4], [2][5],

function isSudoku(grid) {
  //matrix checker
  let counter = 0;
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    //in each row do this
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      const currentCell = grid[rowIndex][columnIndex];
      counter++;
      // column+1, take that number and put it in an obj
      // if (counter[currentCell]) {
      //   return false;
      // } else {
      //   if (currentCell !== ".") {
      //     counter[currentCell] = 1;
      //   }
    }
  }
  console.log(`"row ${rowIndex} is now at:"`, rowNums);
  // row checker
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    //in each row do this
    let rowNums = {};
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      const currentCell = grid[rowIndex][columnIndex];
      // column+1, take that number and put it in an obj
      if (rowNums[currentCell]) {
        return false;
      } else {
        if (currentCell !== ".") {
          rowNums[currentCell] = 1;
        }
      }
    }
    console.log(`"row ${rowIndex} is now at:"`, rowNums);
  }
  // column checker
  for (let c = 0; c < 9; c++) {
    //in each row do this
    let columnNums = {};
    for (let r = 0; r < 9; r++) {
      const currentCell = grid[r][c];
      // column+1, take that number and put it in an obj
      if (columnNums[currentCell]) {
        return false;
      } else {
        if (currentCell !== ".") {
          columnNums[currentCell] = 1;
        }
      }
    }
    console.log(`"column ${c} is now at:"`, columnNums);
  }
  return true;
}
console.log("end:", isSudoku(a));
