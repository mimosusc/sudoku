var val = {};
let i, o, k;
for( i = 0; i < 3; i++ ) {
  switch( i ) {
    case 0:
      o = 'cube';
      break;
    case 1:
      o = 'row';
      break;
    case 2:
      o = 'col';
      break;
  }
  val[o] = [];
  for( k = 0; k < 9; k++ ) {
    val[o][k] = [];
    for( y = 0; y < 9; y++ ) {
    val[o][k][y] = [];
    }
  }
}

const solveSquares = () => {
  let squareVal, l;
  for ( m = 0; m < val['cube'].length; m++ ) {
    a = '#gridChild' + m;
    for ( i = 0; i < val['cube'][m].length; i++ ) {
      b = '.grid-square' + '[data-grid=' + 'square' + i + ']';
      squareVal = document.querySelector( a + ' > ' + b ).value;
      if ( val['cube'][m][i] === null ) {
        val['cube'][m][i] = '';
      }else {
        val['cube'][m][i] = squareVal;
      }
    }
  }
  k = 0,
  l = 0;
  for ( m = 0; m < val['row'].length; m++ ) {
    l = ( m % 3 === 0 ? l = 0 : l += 3);
    if ( m >= 3 && m % 3 === 0 ) {
      k += 3;
    }
    for ( i = 0; i < val['row'][m].length; i++ ) {
      a = '#gridChild' + k;
      b = '.grid-square' + '[data-grid=' + 'square' + l + ']';
      squareVal = document.querySelector( a + ' > ' + b ).value;
      if ( val['row'][m][i] === null ) {
        val['row'][m][i] = '';
      } else {
        val['row'][m][i] = squareVal;
      }
      l++;
      if ( l % 3  === 0 ) {
        l -= 3;
        k++;
      }
      if ( i >= 8 ) {
        k -= 3;
      }
    }
  }

  o = 0;
  k = 0;
  for ( m = 0; m < val['col'].length; m++ ) {
    l = 0,
    p = 0;
    if ( m > 0 && m % 3 === 0 ) {
      o = m / 3;
      ++k;
    }
    p = ( m % 3 );
    l += p;
    for ( i = 0; i < val['col'][m].length; i++ ) {
      if ( i > 0 && i % 3 === 0 ) {
        k += 3;
      }
      if (i > 0) {
        l = ( i % 3 === 0 ? l -= 6 : l += 3 );
      }
      a = '#gridChild' + k;
      b = '.grid-square' + '[data-grid=' + 'square' + l + ']';
      squareVal = document.querySelector( a + ' > ' + b ).value;
      if ( val['col'][m][i] === null ) {
        val['col'][m][i] = '';
      } else {
        val['col'][m][i] = squareVal;
      }
      if (i === 8 ) {
        k -= ( k - o );
      }
    }
  }
}
solveSquares();


