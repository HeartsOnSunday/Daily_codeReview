function printBoard() {
  console.log(" | | ");
  console.log("-+-+-");
  console.log(" | | ");
  console.log("-+-+-");
  console.log(" | | ");
}

function printBetterBoard() {
  const odd = " | | ";
  const even = "-+-+-";
  let counter = 5;
  const magicNumber = 2;
  for (let i = 0; i < 6; i++) {
    if (i === 5) {
      return 0;
    }
    if (counter % magicNumber === 1) {
      console.log(odd);
      counter--;
      //console.log(counter);
    } else if (counter % magicNumber === 0) {
      console.log(even);
      counter--;
      // console.log(counter);
      // } else if (counter === 0) {
      //   return 0;
    }
  }
}

//printBoard();

printBetterBoard();
