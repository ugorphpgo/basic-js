/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const offsets = [-1, 0, 1];

  return matrix.map((line, row) =>
    line.map((_, col) => {
      let mines = 0;
      offsets.forEach((dRow) => {
        offsets.forEach((dCol) => {
          const isSelf = dRow === 0 && dCol === 0;
          if (!isSelf && matrix[row + dRow]?.[col + dCol] === true) mines += 1;
        });
      });
      return mines;
    }),
  );
}

module.exports = {
  minesweeper
};
