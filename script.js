//   ☆ ベース生成プログラム ☆   
const setBase = () => {
// bodyタグ直下にwrapを生成
setElementInsertBefore(setElementData('div', 'body', 'Wrap', 'wrap'));
// SOLVEボタンを生成
setElementAppendChild(setElementData('button', 'Wrap', 'solveBtn', 'solve-btn', 'SOLVE'));
// グリッドの格納先を生成
setElementAppendChild(setElementData('form', 'Wrap', 'gridContainer', 'grid-container'));
// グリッドの軸となる配列を生成
setGRID_BASE(GRID_PIECES);
// グリッドを生成
setGrid();
// スタイル調整用cssクラスを付与
adjustStyle();
// データ格納用の空配列を生成
createGROUP_DATA();
// 【テスト用】サンプル問題を入力
// sampleQ();
// 【テスト用】ベース配列の番地を入力
putIndex();

// run the function for set array for solve.
// setBaseNumbers();
// set solveBtn.
// document.getElementById('solveBtn').setAttribute('onclick', 'solvePack()');
}
//   ☆ データ取得プログラム ☆   
const getValue = () => {
collectBaseValue();
separateData();
}
//   *   ☆   *   ☆   *   ☆   *   ☆   *   

// プログラム呼び出し
setBase();
getValue();

console.log(ROW_DATA);
console.log(COL_DATA);
console.log(BROCK_DATA);