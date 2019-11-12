// *** 生成する要素のベース情報 *** 
const setElementData = (
  elementTag,
  parentID,
  elementID,
  elementClass,
  elementText,
  elementType
  ) => {
    element = document.createElement(elementTag);
    parent = document.getElementById(parentID);
    if (elementID) element.id = elementID;
    if (elementClass) element.classList = elementClass;
    if (elementText) element.textContent = elementText;
    if (elementType) element.type = elementType;
}
// *** *** *** *** *** *** *** *** 

// *** 生成する要素の生成先 *** 
const setElementInsertBefore = () => {
  parent.insertBefore(element, parent.firstChild);
}
const setElementAppendChild = () => {
  parent.appendChild(element, parent.firstChild);
}
// *** *** *** *** *** *** *** 

// *** グリッドを生成 *** 
const setGrid = () => {
  GRID_BASE.forEach(i => {
    setElementAppendChild(
      setElementData(
        'input',
        'gridContainer',
        `grid${i}`,
        'grid',
        undefined,
        'number',
        )
      );
  });
}
// *** *** *** *** *** 

// *** スタイル調整用cssクラスを付与 *** 
const adjustStyle = () => {
  const styleClass = 'is' + GRID_SQUARE_ROOT;
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.classList.add(styleClass);
  GRID_BASE.forEach(i => {
    const grid = document.querySelector('#grid' + i);
    grid.classList.add(styleClass);
  });
}
// *** *** *** *** *** *** *** *** *** 