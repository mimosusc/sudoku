// *** データを1つの配列に格納 *** 
const collectBaseValue = () => {
  GRID_BASE.forEach( (value, index) => {
    const pickUpValue = document.querySelector('#grid' + index).value;
    BASE_DATA.push(pickUpValue);
  });
}
// *** *** *** *** *** *** *** 

// *** データをグループ毎に分類 *** 
const separateData = () => {
  BASE_DATA.forEach( (value, index, array) => {
    // 全グループで流用する定数
    const wrapIndex = Math.floor(index / GRID_PIECES);
    const innerIndex = index - (wrapIndex * GRID_PIECES);
    // --- 行データを生成 --- 
    ROW_DATA[wrapIndex][innerIndex].push(value);
    // --- 列データを生成 --- 
    const breakPoint = (wrapIndex * GRID_PIECES) + wrapIndex;
    let fluctuationValue = index - breakPoint;
    let result = array[breakPoint + GRID_PIECES * fluctuationValue];
    COL_DATA[wrapIndex][innerIndex].push(result);
    // --- ブロックデータを生成 --- 
    const wrapIndexRule = wrapIndex % GRID_SQUARE_ROOT;
    const distanceBetweenIndexes = GRID_PIECES - GRID_SQUARE_ROOT;
    fluctuationValue = distanceBetweenIndexes * Math.floor(innerIndex / GRID_SQUARE_ROOT);
    result = array[index - (distanceBetweenIndexes * wrapIndexRule)+ fluctuationValue];
    BROCK_DATA[wrapIndex][innerIndex].push(result);
  });
}
// *** *** *** *** *** *** *** 