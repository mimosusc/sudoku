// *** Function for generating elements. ***
const generateElement = (
  elementTag,
  parentID,
  elementPosition,
  elementID,
  elementClass,
  elementText,
  elementType,
  elementData,
  elementDataValue
  ) => {
    element = document.createElement(elementTag);
    parent = document.getElementById(parentID);
    switch(elementPosition){
      case 'insertBefore':
        parent.insertBefore(element, parent.firstChild);
        break
      case 'appendChild':
        document.getElementById(parentID).appendChild(element);
        break
      default:
        document.getElementById(parentID).appendChild(element);
    }
    if (elementID) element.id = elementID;
    if (elementClass) element.classList = elementClass;
    if (elementText) element.textContent = elementText;
    if (elementType) element.type = elementType;
    if (elementData && elementDataValue) element.dataset[elementData] = elementDataValue;
  }
// *** *** *** *** *** *** *** *** *** *** ***

// run the function for generating wrapper.
generateElement('div', 'body', 'insertBefore', 'Wrap', 'wrap');

// run the function for generating button for the solving question.
generateElement('button', 'Wrap', 'appendChild', 'solveBtn', 'solve-btn', 'SOLVE');

// run the function for generating container for grid.
generateElement('form', 'Wrap', 'appendChild', 'gridContainer', 'grid-container');

// *** Function for generating array for generating grid. ***
const generateGridBase = (gridPieces = 9) => {
  gridBase = [];
  for (let i = 0; i < gridPieces; i++) {
    gridBase.push(i);
  }
}
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

// run the function for generating array for generating grid.
generateGridBase();

// *** Function for generating grid. ***
const gridFleshing = () => {
  gridBase.forEach(childCount => {
    generateElement('div', 'gridContainer', 'appendChild', 'gridChild' + childCount, 'grid-child');
    gridBase.forEach(grandchildCount => {
      generateElement(
        'input',
        'gridChild' + childCount,
        'appendChild',
        undefined,
        'grid-grandchild',
        undefined,
        'number',
        'grid',
        'square' + grandchildCount
        );
    });
  });
}
// *** *** *** *** *** *** *** *** *** ***

// run the function for generating grid.
gridFleshing();