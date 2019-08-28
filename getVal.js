// --*-- variables. --*-- 
let val = {},
    lawBaseNum,
    initialChild = 0,
    initialGrandchild = 0,
    addChild,
    addGrandchild,
    focusChild,
    focusGrandchild;
const gridSquareRoot = Math.sqrt(gridPieces);
// --*-- --*-- --*-- --*-- 
const getVal = () => {
    // --*-- arrays for comparison. --*-- 
    val = {
      'gridChild': [], 'row': [], 'column': []
    }
    // --*-- --*-- --*-- --*-- --*-- --*-- 
  Object.keys(val).forEach(key =>{
    gridBase.forEach(currentChild => {
      val[key][currentChild] = [];
      lawBaseNum = currentChild % gridSquareRoot;
      switch (key) {
        case 'gridChild':
          break;
        case 'row':
          if(currentChild % gridSquareRoot === 0) initialChild = currentChild;
          initialGrandchild = (lawBaseNum !== 0 ? lawBaseNum * gridSquareRoot : 0);
          break;
        case 'column':
          if(currentChild % gridSquareRoot === 0 ) initialChild = currentChild / gridSquareRoot;
          initialGrandchild = lawBaseNum;
          break;
      }
      val[key][currentChild] = [];
      gridBase.forEach(currentGrandchild => {
        val[key][currentChild][currentGrandchild] = [];
        switch (key) {
          case 'gridChild':
            focusChild = currentChild;
            focusGrandchild = currentGrandchild;
            break;
          case 'row':
            if(currentGrandchild % gridSquareRoot === 0) addChild = currentGrandchild / gridSquareRoot;
            focusChild = initialChild + addChild;
            focusGrandchild = initialGrandchild + (currentGrandchild % gridSquareRoot);
            break;
          case 'column':
            if(currentGrandchild % gridSquareRoot === 0) addChild = currentGrandchild;
            focusChild = (addChild !== undefined ? initialChild + addChild : initialChild);
            addGrandchild = (currentGrandchild % gridSquareRoot) * gridSquareRoot;
            focusGrandchild = initialGrandchild + addGrandchild;
            break;
        }
        cellValue = document.querySelector(`#gridChild${focusChild} > [data-grid=square${focusGrandchild}]`).value;
        val[key][currentChild][currentGrandchild] = cellValue;
      });
    });
  });
}
// run the function for get values;
getVal();