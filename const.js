// common
const GRID_PIECES = 16;
const GRID_SQUARE_ROOT = Math.sqrt(GRID_PIECES);

// *** グリッド生成用の配列を作成 *** 
const setGRID_BASE = () => {
  GRID_BASE = [];
  for (let i = 0; i < (GRID_PIECES * GRID_PIECES); i++) {
    GRID_BASE.push(i);
  }
}
// *** *** *** *** *** *** *** *** 

// *** データ格納用の空配列を生成 *** 
const BASE_DATA = [];
const createGROUP_DATA = () => {
  GROUP_DATA = [];
  for (let wrapIndex = 0; wrapIndex < (GRID_PIECES); wrapIndex++) {
    GROUP_DATA[wrapIndex] = []
    for (let innerIndex = 0; innerIndex < (GRID_PIECES); innerIndex++) {
      GROUP_DATA[wrapIndex][innerIndex] = [];
    }
  }
  ROW_DATA = JSON.parse(JSON.stringify(GROUP_DATA));
  COL_DATA = JSON.parse(JSON.stringify(GROUP_DATA));
  BROCK_DATA = JSON.parse(JSON.stringify(GROUP_DATA));
}
// *** *** *** *** *** *** *** *** 