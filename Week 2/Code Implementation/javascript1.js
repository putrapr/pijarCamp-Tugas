// 1. Membuat Object Biodata
// const biodata = {
//   name: "Putra Prasetya",
//   age: 23,
//   hobbies: ['Learn', 'Playing Game', 'Badminton', 'Swim'],
//   IsMarried: false,
//   schoolList: [
//     {
//       name: "SDN 3 Jaten", 
//       yearIn: "2006", 
//       yearOut: "2012",
//       major: null
//     },
//     {
//       name: "SMPN 1 Selogiri", 
//       yearIn: "2012", 
//       yearOut: "2015",
//       major: null
//     },
//     {
//       name: "SMA 1 Nguter", 
//       yearIn: "2015", 
//       yearOut: "2018",
//       major: "Science"
//     },
//     {
//       name: "Universitas Indraprasta", 
//       yearIn: "2018", 
//       yearOut: "2022",
//       major: "Informatics Engineering"
//     }
//   ],
//   skills: [
//     {
//       skillName: "Web Programming",
//       level: "Beginner",
//     },
//     {
//       skillName: "Critical Thinking",
//       level: "Beginner"
//     }
//   ],
//   interestInCoding: true
// };

// console.log(biodata);

// 2. Nilai rata-rata UN: bi, bing, mtk, ipa. Ada validasi
// const mtk = 80;
// const bahasaIndonesia = 90;
// const bahasaInggris = 89;
// const ipa = 69;
// nilaiRataRata(mtk, bahasaIndonesia, bahasaInggris, ipa);

// function nilaiRataRata(mtk = undefined, bi = undefined, bing = undefined, ipa = undefined) {
//   if (mtk == undefined || bi == undefined || bing == undefined || ipa == undefined) {
//     return console.log("Isi semua nilai terlebih dahulu !");
//   }

//   const nilaiRata = ((mtk+bi+bing+ipa) / 4);
//   let grade="";

//   switch (true) {
//     case (nilaiRata>100): return console.log("Input salah!"); 
//     case (nilaiRata>=90): grade = "A"; break;
//     case (nilaiRata>=80): grade = "B"; break;
//     case (nilaiRata>=70): grade = "C"; break;
//     case (nilaiRata>=60): grade = "D"; break;
//     case (nilaiRata>=0 && nilaiRata <= 59): grade = "E"; break;
//     default: return console.log("Input salah!");
//   }

//   return console.log(`
//     Rata-rata = ${nilaiRata}
//     Grade = ${grade}
//   `);
// }

// 3. printSegitiga
// const printSegitiga = 5;
// if (isNaN(printSegitiga)){
//   return console.log("Data harus number");
// } 

// let hasil = '';
// for (let i = printSegitiga; i > 0; i--) {
//   for (let j = 1; j <= i; j++) {
//     hasil += j+' ';
//   }
//   hasil += '\n';
// }
// console.log(hasil);

// 4a. Menyambung isi object menggunakan Spread Operator
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
}

const me = {
  ...data,
  name: "Putra Prasetya",
  email: "putraprasetya333@gmail.com",
  hobby: ["learn", "playing games", "badminton", "swim"]
}

// console.log(me);


// 4b. Ambil nama jalan dan kota menggunakan destructuring
const {address: {street}, address: {city}} = me;
console.log(street);
console.log(city);

