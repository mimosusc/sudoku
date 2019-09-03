// *** Function for get values in cell. ***
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
      lawBaseNum = currentChild % gridSquareRoot;
      val[key][currentChild] = [];
      gridBase.forEach(currentGrandchild => {
        val[key][currentChild][currentGrandchild] = [];
        initialChild = 0, addChild = 0, initialGrandchild = 0, addGrandchild = 0;
        switch (key) {
          case 'gridChild':
            focusChild = currentChild;
            focusGrandchild = currentGrandchild;
            break;
          case 'row':
            initialChild = Math.floor(currentGrandchild / gridSquareRoot);
            addChild = Math.floor(currentChild / gridSquareRoot) * gridSquareRoot;
            initialGrandchild = (currentChild % gridSquareRoot) * gridSquareRoot;
            addGrandchild = currentGrandchild % gridSquareRoot;
            focusChild = initialChild + addChild;
            focusGrandchild = initialGrandchild + addGrandchild;
            break;
          case 'column':
            initialChild = Math.floor(currentChild / gridSquareRoot);
            addChild = Math.floor(currentGrandchild / gridSquareRoot) * gridSquareRoot;
            initialGrandchild = currentChild % gridSquareRoot;
            addGrandchild = Math.floor(currentGrandchild % gridSquareRoot) * gridSquareRoot;
            focusChild = (addChild !== undefined ? initialChild + addChild : initialChild);
            focusGrandchild = initialGrandchild + addGrandchild;
            break;
        }
        cellValue = document.querySelector(`#gridChild${focusChild} > [data-grid=square${focusGrandchild}]`).value;
        val[key][currentChild][currentGrandchild] = cellValue;
      });
    });
  });
}
// *** *** *** *** *** *** *** *** *** *** *** 