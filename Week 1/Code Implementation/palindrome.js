function palindrome (teks) {
  let temp = "";
  for (let i = teks.length-1; i >= 0; i--) {
    temp = temp + teks.charAt(i);
  }
  
  if (temp == teks) console.log('palindrom');
  else console.log('bukan palindrome');
}

palindrome('malam');