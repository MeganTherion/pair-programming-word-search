





//const transpose = require('/..transpose')

const transpose = function (matrix) {
    let result = [];
    const rows = matrix[0].length;
    const cols = matrix.length;
    for (let i = 0; i < rows; i++) {
      const newRow = [];
      for (let j = 0; j < cols; j++) {
        newRow.push(matrix[j][i]);
      }
      result.push(newRow);
    }
    return result;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    const newArray = horizontalJoin.concat(verticalJoin);
    console.log('horizontaljoin', horizontalJoin);
    console.log('verticalJoin', verticalJoin);
    console.log('newArray', newArray)
    // for (x of verticalJoin) {
    //     if (x.includes(word)) return true;
    // }
    for (l of newArray) {
      if (l.includes(word)) return true;
     } if (!l.includes(word)) return false;
    }




module.exports = wordSearch