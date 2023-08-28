function divideAndSort(num) {
  console.log(num);
  console.log("");
  let numStr = num.toString();

  // memotong nomor jika ada nomor 0, 
  // lalu masukkan ke multidimensi array
  let numArr2D = [];
  numArr2D[0] = [];
  let j = 0, k = 0;
  for (let i = 0; i < numStr.length; i++){
    if (numStr.charAt(i) != "0") {
      numArr2D[j][k] = numStr.charAt(i);
      k++;
    } else {
      j++;
      numArr2D[j] = [];
      k = 0;
    }  
  }

  // pengurutan (bubble sort)
  let temp = 0;
  for (let i = 0; i < numArr2D.length; i++) {
    // console.log(`Larik ke-${i+1} `);
    // console.log("------------------");
    for (let j = 1; j < numArr2D[i].length; j++) {
      // console.log(`Perulangan ke-${j} : `);
      // console.log(`Data Awal : ${numArr2D[i]}`);
      for (let k = 0; k < numArr2D[i].length-1; k++) {
        if (numArr2D[i][k+1] < numArr2D[i][k]) {
          // console.log(`[${k}]. ${numArr2D[i][k+1]} < ${numArr2D[i][k]} true  numArr2D[i]`);
          temp = numArr2D[i][k+1];
          numArr2D[i][k+1] = numArr2D[i][k];
          numArr2D[i][k] = temp;
        } else {
          // console.log(`[${k}]. ${numArr2D[i][k+1]} < ${numArr2D[i][k]} false numArr2D[i]`);
        }
      }
      // console.log(`Hasil Pengurutan ke-${j}: ${numArr2D[i]}`);
      // console.log("");
    }  
  }

  // konversi array ke string
  temp = "";
  for (let i = 0; i < numArr2D.length; i++) { 
    for (let j = 0; j < numArr2D[i].length; j++) {
      temp = temp + numArr2D[i][j];
    }
  }
  
  console.log(Number(temp));
}

divideAndSort(5956560159466056);