const sampleQ = ()=> {
  m = 0,
  i = 0;

  a = '#gridChild' + m;
  i=3;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 4;
  i=5;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 1;
  i=8;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 7;

  ++m;
  a = '#gridChild' + m;
  i=0;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 8;
  i=2;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 4;
  i=4;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 7;
  i=7;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 2;

  ++m;
  a = '#gridChild' + m;
  i=3;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 9;
  i=5;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 3;
  i=6;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 8;

  ++m;
  a = '#gridChild' + m;
  i=1;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 6;
  i=2;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 5;
  i=3;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 7;
  i=4;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 1;
  i=5;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 9;
  i=7;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 3;
  i=8;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 4;

  ++m;
  a = '#gridChild' + m;
  i=0;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 7;
  i=2;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 9;
  i=6;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 5;
  i=8;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 2;

  ++m;
  a = '#gridChild' + m;
  i=0;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 3;
  i=1;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 1;
  i=3;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 2;
  i=4;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 8;
  i=5;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 5;
  i=6;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 7;
  i=7;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 6;

  ++m;
  a = '#gridChild' + m;
  i=2;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 3;
  i=3;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 5;
  i=5;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 2;

  ++m;
  a = '#gridChild' + m;
  i=1;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 6;
  i=4;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 4;
  i=6;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 2;
  i=8;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 3;

  ++m;
  a = '#gridChild' + m;
  i=0;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 4;
  i=3;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 6;
  i=5;
  b = '[data-grid=' + 'square' + i + ']';
  document.querySelector( a + ' > ' + b ).value = 8;
}


// 難問

//   a = '#gridChild' + m;
//   i=3;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 4;
//   i=5;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 1;
//   i=8;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 7;

//   ++m;
//   a = '#gridChild' + m;
//   i=0;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 8;
//   i=2;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 4;
//   i=4;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 7;
//   i=7;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 2;

//   ++m;
//   a = '#gridChild' + m;
//   i=3;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 9;
//   i=5;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 3;
//   i=6;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 8;

//   ++m;
//   a = '#gridChild' + m;
//   i=1;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 6;
//   i=2;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 5;
//   i=3;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 7;
//   i=4;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 1;
//   i=5;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 9;
//   i=7;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 3;
//   i=8;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 4;

//   ++m;
//   a = '#gridChild' + m;
//   i=0;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 7;
//   i=2;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 9;
//   i=6;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 5;
//   i=8;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 2;

//   ++m;
//   a = '#gridChild' + m;
//   i=0;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 3;
//   i=1;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 1;
//   i=3;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 2;
//   i=4;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 8;
//   i=5;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 5;
//   i=6;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 7;
//   i=7;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 6;

//   ++m;
//   a = '#gridChild' + m;
//   i=2;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 3;
//   i=3;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 5;
//   i=5;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 2;

//   ++m;
//   a = '#gridChild' + m;
//   i=1;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 6;
//   i=4;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 4;
//   i=6;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 2;
//   i=8;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 3;

//   ++m;
//   a = '#gridChild' + m;
//   i=0;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 4;
//   i=3;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 6;
//   i=5;
//   b = '[data-grid=' + 'square' + i + ']';
//   document.querySelector( a + ' > ' + b ).value = 8;
// }

sampleQ();