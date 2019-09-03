//   ☆ The package for setting base. ☆   
const setBase = () => {
// run the function for set wrapper.
setElement('div', 'body', 'insertBefore', 'Wrap', 'wrap');
// run the function for set button for the solving question.
setElement('button', 'Wrap', 'appendChild', 'solveBtn', 'solve-btn', 'SOLVE');
// run the function for set container for grid.
setElement('form', 'Wrap', 'appendChild', 'gridContainer', 'grid-container');
// run the function for set array for set grid.
setGridBase(gridPieces);
// run the function for set grid.
gridFleshing();
// run the function for set array for solve.
setBaseNumbers();
// set solveBtn.
document.getElementById('solveBtn').setAttribute('onclick', 'solvePack()');
}
//   *   ☆   *   ☆   *   ☆   *   ☆   *   

// Running the package for setting base.
setBase();


