// 1.グリッドを生成する
let element, elementTag, parentID, elementID, elementClass;
const generateSquare = (elementTag, parentID, elementID, elementClass) => {
  element = document.createElement(elementTag);
  parent = document.getElementById(parentID);
  parent.appendChild(element);
  element.id = elementID;
  element.classList = elementClass;
}

elementTag = 'div';
element = document.createElement(elementTag);
document.getElementById('body').insertBefore(element, document.getElementById('body').firstChild);
element.id = 'Wrap';
element.classList = 'wrap';


elementTag = 'button';
element = document.createElement(elementTag);
document.getElementById('Wrap').insertBefore(element, document.getElementById('Wrap').firstChild);
element.id = 'generateGrid';
element.classList = 'generate-grid';
element.textContent = 'generateGrid';

const generateGrid = (grid=9) => {
  elementTag = 'form';
  element = document.createElement(elementTag);
  document.getElementById('Wrap').appendChild(element);
  element.id = 'gridContainer';
  element.classList = 'grid-container';

  o = 0;
  for (let i = 0; i < grid; i++) {
    generateSquare('div', 'gridContainer', 'gridChild' + i, 'grid-child');
    for (let k = 0; k < grid; k++) {
      generateSquare('input', 'gridChild' + i, 'gridSquare' + o, 'grid-square');
      element.type = 'number';
      element.dataset['grid'] = 'square' + k;
      element.value = o;
      o++;
    }
  }
}
generateGrid();
// document.getElementById('generateGrid').setAttribute('onclick', 'generateGrid()');