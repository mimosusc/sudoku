let gridPieces = 9;

// *** Function for set elements. ***
const setElement = (
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

// *** Function for set array for set grid. ***
const setGridBase = () => {
  gridBase = [];
  for (let i = 0; i < gridPieces; i++) {
    gridBase.push(i);
  }
}
// *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***

// *** Function for set grid. ***
const gridFleshing = () => {
  gridBase.forEach(currentChild => {
    setElement('div', 'gridContainer', 'appendChild', `gridChild${currentChild}`, 'grid-child');
    gridBase.forEach(currentGrandchild => {
      setElement(
        'input',
        `gridChild${currentChild}`,
        'appendChild',
        undefined,
        'grid-grandchild',
        undefined,
        'number',
        'grid',
        `square${currentGrandchild}`
        );
    });
  });
}
// *** *** *** *** *** *** *** *** *** ***