// *** Function for set array for solve. ***
let baseNumbers, candidate;
const setBaseNumbers = () => {
  baseNumbers = new Map;
  for (i = 1; i <= gridBase.length; i++) {
    baseNumbers.set(i,i);
  }
}
// *** *** *** *** *** *** *** *** *** *** *** 

// *** Function for solve. ***
let settingDestination;
const solve = () => {
  gridBase.forEach(currentChild => {
    gridBase.forEach(currentGrandchild => {
      settingDestination = val['gridChild'][currentChild][currentGrandchild];
      if(settingDestination === "") {
        candidate = new Map(baseNumbers);
        Object.keys(val).forEach(key => {
          lawBaseNum = currentChild % gridSquareRoot;
          initialChild = 0, addChild = 0;
          switch (key) {
            case 'gridChild':
              focusChild = currentChild;
              break;
            case 'row':
              initialChild = Math.floor(currentChild / gridSquareRoot) * gridSquareRoot;
              addChild = Math.floor(currentGrandchild / gridSquareRoot);
              focusChild = initialChild + addChild;
              break;
            case 'column':
              initialChild = (currentChild % gridSquareRoot === 0 ? 0 : (currentChild % gridSquareRoot) * gridSquareRoot);
              addChild = currentGrandchild % gridSquareRoot;
              focusChild = (addChild !== undefined ? initialChild + addChild : initialChild);
              break;
          }
          excludeValues = val[key][focusChild];
          excludeValues.forEach(excludeValue => {
            if(excludeValue !== "") candidate.delete(Number(excludeValue));
          });
        });
        if(candidate.size === 1) {
          candidate.forEach(includeValue => {
            settingDestination = candidate.get(includeValue);
            focusCell = document.querySelector(`#gridChild${currentChild} > [data-grid=square${currentGrandchild}]`);
            focusCell.value = settingDestination;
          });
        }
      }
    });
  });
}
// *** *** *** *** *** *** *** 


// *** Function for chacking for loop solve. ***
let needSolve;
const valChacking = () => {
  gridBase.forEach(currentChild => {
    if (!needSolve) {
      excursionArray = val['gridChild'][currentChild];
      excursionArray.find((element) => {
        if (element === "") {
          return needSolve = true;
        } else {
          return needSolve = false;
        }
      })
    } else {
      return needSolve = false;
    }
  });
}
// *** *** *** *** *** *** *** *** *** *** *** 


//   ☆ The package for running solve. ☆   
const solvePack = () => {
  getVal();
  valChacking();
  solve();
  if (needSolve) solvePack();
}
//   *   ☆   *   ☆   *   ☆   *   ☆   *   