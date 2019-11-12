const sampleQ = ()=> {
  i = 0;document.querySelector('#grid' + i).value = "";
  i = 1;document.querySelector('#grid' + i).value = "";
  i = 2;document.querySelector('#grid' + i).value = "";
  i = 3;document.querySelector('#grid' + i).value = "8";
  i = 4;document.querySelector('#grid' + i).value = "";
  i = 5;document.querySelector('#grid' + i).value = "4";
  i = 6;document.querySelector('#grid' + i).value = "";
  i = 7;document.querySelector('#grid' + i).value = "";
  i = 8;document.querySelector('#grid' + i).value = "";
  i = 9;document.querySelector('#grid' + i).value = "4";
  i = 10;document.querySelector('#grid' + i).value = "";
  i = 11;document.querySelector('#grid' + i).value = "1";
  i = 12;document.querySelector('#grid' + i).value = "";
  i = 13;document.querySelector('#grid' + i).value = "7";
  i = 14;document.querySelector('#grid' + i).value = "";
  i = 15;document.querySelector('#grid' + i).value = "9";
  i = 16;document.querySelector('#grid' + i).value = "";
  i = 17;document.querySelector('#grid' + i).value = "3";
  i = 18;document.querySelector('#grid' + i).value = "";
  i = 19;document.querySelector('#grid' + i).value = "";
  i = 20;document.querySelector('#grid' + i).value = "7";
  i = 21;document.querySelector('#grid' + i).value = "";
  i = 22;document.querySelector('#grid' + i).value = "2";
  i = 23;document.querySelector('#grid' + i).value = "";
  i = 24;document.querySelector('#grid' + i).value = "8";
  i = 25;document.querySelector('#grid' + i).value = "";
  i = 26;document.querySelector('#grid' + i).value = "";
  i = 27;document.querySelector('#grid' + i).value = "";
  i = 28;document.querySelector('#grid' + i).value = "6";
  i = 29;document.querySelector('#grid' + i).value = "5";
  i = 30;document.querySelector('#grid' + i).value = "7";
  i = 31;document.querySelector('#grid' + i).value = "";
  i = 32;document.querySelector('#grid' + i).value = "9";
  i = 33;document.querySelector('#grid' + i).value = "3";
  i = 34;document.querySelector('#grid' + i).value = "1";
  i = 35;document.querySelector('#grid' + i).value = "";
  i = 36;document.querySelector('#grid' + i).value = "7";
  i = 37;document.querySelector('#grid' + i).value = "1";
  i = 38;document.querySelector('#grid' + i).value = "9";
  i = 39;document.querySelector('#grid' + i).value = "";
  i = 40;document.querySelector('#grid' + i).value = "";
  i = 41;document.querySelector('#grid' + i).value = "";
  i = 42;document.querySelector('#grid' + i).value = "2";
  i = 43;document.querySelector('#grid' + i).value = "8";
  i = 44;document.querySelector('#grid' + i).value = "5";
  i = 45;document.querySelector('#grid' + i).value = "";
  i = 46;document.querySelector('#grid' + i).value = "3";
  i = 47;document.querySelector('#grid' + i).value = "4";
  i = 48;document.querySelector('#grid' + i).value = "5";
  i = 49;document.querySelector('#grid' + i).value = "";
  i = 50;document.querySelector('#grid' + i).value = "2";
  i = 51;document.querySelector('#grid' + i).value = "7";
  i = 52;document.querySelector('#grid' + i).value = "6";
  i = 53;document.querySelector('#grid' + i).value = "";
  i = 54;document.querySelector('#grid' + i).value = "";
  i = 55;document.querySelector('#grid' + i).value = "";
  i = 56;document.querySelector('#grid' + i).value = "3";
  i = 57;document.querySelector('#grid' + i).value = "";
  i = 58;document.querySelector('#grid' + i).value = "6";
  i = 59;document.querySelector('#grid' + i).value = "";
  i = 60;document.querySelector('#grid' + i).value = "4";
  i = 61;document.querySelector('#grid' + i).value = "";
  i = 62;document.querySelector('#grid' + i).value = "";
  i = 63;document.querySelector('#grid' + i).value = "5";
  i = 64;document.querySelector('#grid' + i).value = "";
  i = 65;document.querySelector('#grid' + i).value = "2";
  i = 66;document.querySelector('#grid' + i).value = "";
  i = 67;document.querySelector('#grid' + i).value = "4";
  i = 68;document.querySelector('#grid' + i).value = "";
  i = 69;document.querySelector('#grid' + i).value = "6";
  i = 70;document.querySelector('#grid' + i).value = "";
  i = 71;document.querySelector('#grid' + i).value = "8";
  i = 72;document.querySelector('#grid' + i).value = "";
  i = 73;document.querySelector('#grid' + i).value = "";
  i = 74;document.querySelector('#grid' + i).value = "";
  i = 75;document.querySelector('#grid' + i).value = "2";
  i = 76;document.querySelector('#grid' + i).value = "";
  i = 77;document.querySelector('#grid' + i).value = "3";
  i = 78;document.querySelector('#grid' + i).value = "";
  i = 79;document.querySelector('#grid' + i).value = "";
  i = 80;document.querySelector('#grid' + i).value = "";
}

const putIndex = () => {
  GRID_BASE.forEach(i => {
    document.querySelector('#grid' + i).value = i;
  });
}


// 難問

//   i=3;
//   document.querySelector( a ).value = 4;
//   i=5;
//   document.querySelector( a ).value = 1;
//   i=8;
//   document.querySelector( a ).value = 7;

//   i=0;
//   document.querySelector( a ).value = 8;
//   i=2;
//   document.querySelector( a ).value = 4;
//   i=4;
//   document.querySelector( a ).value = 7;
//   i=7;
//   document.querySelector( a ).value = 2;

//   i=3;
//   document.querySelector( a ).value = 9;
//   i=5;
//   document.querySelector( a ).value = 3;
//   i=6;
//   document.querySelector( a ).value = 8;

//   i=1;
//   document.querySelector( a ).value = 6;
//   i=2;
//   document.querySelector( a ).value = 5;
//   i=3;
//   document.querySelector( a ).value = 7;
//   i=4;
//   document.querySelector( a ).value = 1;
//   i=5;
//   document.querySelector( a ).value = 9;
//   i=7;
//   document.querySelector( a ).value = 3;
//   i=8;
//   document.querySelector( a ).value = 4;

//   i=0;
//   document.querySelector( a ).value = 7;
//   i=2;
//   document.querySelector( a ).value = 9;
//   i=6;
//   document.querySelector( a ).value = 5;
//   i=8;
//   document.querySelector( a ).value = 2;

//   i=0;
//   document.querySelector( a ).value = 3;
//   i=1;
//   document.querySelector( a ).value = 1;
//   i=3;
//   document.querySelector( a ).value = 2;
//   i=4;
//   document.querySelector( a ).value = 8;
//   i=5;
//   document.querySelector( a ).value = 5;
//   i=6;
//   document.querySelector( a ).value = 7;
//   i=7;
//   document.querySelector( a ).value = 6;

//   i=2;
//   document.querySelector( a ).value = 3;
//   i=3;
//   document.querySelector( a ).value = 5;
//   i=5;
//   document.querySelector( a ).value = 2;

//   i=1;
//   document.querySelector( a ).value = 6;
//   i=4;
//   document.querySelector( a ).value = 4;
//   i=6;
//   document.querySelector( a ).value = 2;
//   i=8;
//   document.querySelector( a ).value = 3;

//   i=0;
//   document.querySelector( a ).value = 4;
//   i=3;
//   document.querySelector( a ).value = 6;
//   i=5;
//   document.querySelector( a ).value = 8;
// }

