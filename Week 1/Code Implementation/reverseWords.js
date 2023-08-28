function reverseWords (teks) {
  let temp = "", words = [];
  for (let i = 0; i < teks.length; i++){
    if (teks.charAt(i) != " ") {
      temp = temp + teks.charAt(i);
      if (i == teks.length-1) {
        words.push(temp);
        temp="";
      }
    } else {
      words.push(temp);
      temp="";
    }    
  }

  for (let i = words.length-1; i >= 0; i--) {
    temp = temp + words[i] + " ";
  }
  console.log(temp);
}

reverseWords("Saya belajar Javascript");