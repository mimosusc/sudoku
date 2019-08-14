let num, candidate,
cubeCount, rowCount, colCount,
rowCountOnCube, colCountOnCube,
rowCountOnSquare, colCountOnSquare;

i = 0;
num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
    console.log("cube" + ":" + cubeCount + "," + i);
    console.log("row" + ":" + rowCount);
    console.log("col" + ":" + colCount);
    colCountOnSquare++;


    if ( val["cube"][cubeCount][i] === "" ) {
      candidate = num;
      comparisonNumbers = {};
      for (let n = 0; n < val["cube"][cubeCount].length; n++) {
        console.log(n);
          comparisonNumbers["cubeNum"] = val["cube"][cubeCount][n];
          comparisonNumbers["rowNum"] = val["row"][rowCountOnCube][n];
          comparisonNumbers["colNum"] = val["col"][colCountOnCube][n];
          console.log(comparisonNumbers["cubeNum"]);
          console.log(comparisonNumbers["rowNum"]);
          console.log(comparisonNumbers["colNum"]);
        for (let key in comparisonNumbers) {
          w = String(comparisonNumbers[key]);
          q = candidate.indexOf(w);
          console.log(key + ":" + q);
          if ( q > -1 ) {
            candidate.splice(q, 1);
          }
        }
      }
    }

    console.log(val["cube"][cubeCount]);
    console.log(val["cube"][cubeCount][i]);
    val["cube"][cubeCount][i] = candidate;


  }
}

