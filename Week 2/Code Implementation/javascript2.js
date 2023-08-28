// 1. Buat, jelaskan, & contoh 10 Built-in Function
const num = 99;
// console.log(typeof num.toString());
// 3 built-in function: console.log(), typeof, toString()

const string = "100";
// console.log(typeof Number(string));

const programming = "Javascript";
// console.log(programming.charAt(1));

// console.log(programming.length);

// console.log(programming.substring(2,4));

// console.log(programming.toLowerCase());

// console.log(programming.toUpperCase());

// console.log(Date());


//2. Searching nama & callback function
// function searchName(huruf, batas, pcallback) {
//   const name = [
//     "Abigail", "Alexandra", "Alison",
//     "Amanda", "Angela", "Bella",
//     "Carol", "Caroline", "Carolyn",
//     "Deirdre", "Diana", "Elizabeth",
//     "Ella", "Faith", "Olivia", "Penelope"
//   ];
//   pcallback(name, huruf, batas);
// }

// function callback(name, huruf, batas) {
//   return console.log(name.filter((element) => element.toLowerCase().includes(huruf.toLowerCase())).slice(0, batas));
// }

// searchName("an", 3, callback);


// 3. Program seleksi nilai
function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray){
  // validasi nilaiAwal < nilaiAkhir
  if (nilaiAwal > nilaiAkhir) return console.log("Nilai akhir harus lebih besar dari nilai awal");
  
  // validasi dataArray > 5
  if (dataArray.length < 5) return console.log("Jumlah angka dalam dataArray harus lebih dari 5");

  // ambil dataArray diantara nilaiAwal dan nilaiAkhir
  const dataBaru = [];
  dataArray.forEach((element) => {
    if (nilaiAwal <= element && element <= nilaiAkhir) dataBaru.push(element);
  });

  // Jika dataBaru kosong
  if (dataBaru.length == 0) return console.log("Nilai tidak ditemukan");

  // urutkan data lalu tampilkan
  return console.log(dataBaru.sort(function (a, b) { return a - b }));
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17 , [2, 25, 4]);
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);
