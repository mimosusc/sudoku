let baseNumbers, candidate,
cubeCount, rowCount, colCount,
rowCountOnCube, colCountOnCube,
rowCountOnSquare, colCountOnSquare;

const solve = () => {
  i = 0;
  baseNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  rowCountOnCube = 0,
  colCountOnCube = 0,
  rowCountOnSquare = 0,
  colCountOnSquare = 0;
  
  for ( cubeCount = 0; cubeCount < val["cube"].length; cubeCount++ ) {
    rowCountOnCube = ( cubeCount > 0 && cubeCount % 3 === 0 ? rowCountOnCube += 3 : rowCountOnCube );
    colCountOnSquare = 0;
    colCountOnCube = (cubeCount % 3 === 0 ? colCountOnCube = 0 : colCountOnCube += 3 );
    for ( let i = 0; i < val["cube"][cubeCount].length; i++ ) {
      rowCountOnSquare = ( i % 3 === 0 ? rowCountOnSquare = i / 3 : rowCountOnSquare );
      rowCount = rowCountOnCube + rowCountOnSquare;
      colCountOnSquare = ( i > 0 && i % 3 === 0 ? colCountOnSquare -= 3 : colCountOnSquare );
      colCount = colCountOnCube + colCountOnSquare;
      colCountOnSquare++;
  
  
      if ( val["cube"][cubeCount][i] === "" ) {
        candidate = JSON.parse(JSON.stringify(baseNumbers));
        comparisonNumbers = {};
        for (let n = 0; n < val["cube"][cubeCount].length; n++) {
          comparisonNumbers["cubeNum"] = val["cube"][cubeCount][n];
          comparisonNumbers["rowNum"] = val["row"][rowCount][n];
          comparisonNumbers["colNum"] = val["col"][colCount][n];
          // console.log(n);
          // console.log(cubeCount + ":" + n);
          // console.log(rowCount + ":" + n);
          // console.log(colCount + ":" + n);
          for (let key in comparisonNumbers) {
            w = String(comparisonNumbers[key]);
            q = candidate.indexOf(w);
            if ( q > -1 ) {
              candidate.splice(q, 1);
            }
          }
        }
        if ( candidate.length <= 1 ) {
          val["cube"][cubeCount][i] = candidate[0];
          document.querySelector('#gridChild' + cubeCount + ' > ' + '.grid-square' + '[data-grid=' + 'square' + i + ']' ).value = candidate[0];
        } else {
          val["cube"][cubeCount][i] = candidate;
        }
      }
    }
  }
  solveSquares();
}


// solve();