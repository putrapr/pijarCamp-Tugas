// 1. Menyambung program menggunakan then catch & try catch

// const cekHariKerja = (day) => {
//   return new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//       try {
//         const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
//         let cek = dataDay.find((item)=> {
//           return item === day
//         });
//         if (cek) {
//           resolve(cek)
//         } else {
//           reject(new Error('Hari ini bukan hari kerja'));
//         }
//       } catch (e) {
//         console.log(e)
//       }
            
//     }, 3000);
//   });
// }

// cekHariKerja("senin")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });



// day = 'minggu';
//   setTimeout(()=> {
//     try {
//       const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
//       let cek = dataDay.find((item)=> {
//         return item === day
//       });
//       if (cek) {
//         console.log('Hari kerja');
//       } else {
//         // console.log("Hari ini bukan hari kerja");
//         throw new Error('Hari ini bukan hari kerja');
//       }
//     } catch (e) {
//       console.log(e);
//     }
          
//   }, 3000);



// .then kegunaannya untuk mengambil nilai pada fungsi resolve di dalam object promise
// .catch kegunaannya untuk mengambil nilai pada fungsi reject di dalam object promise
// .try kegunaannya untuk mencoba / menjaga kode dari error, jika ada error akan ditangkap oleh catch
// .catch kegunaannya mengambil error dari try lalu diolah supaya error tersebut tidak muncul ditampilan pengguna 


// 2. Menyambung program menggunakan callback function & menampilkan semua bulan menggunakan map
// const getMonth = (callback) => {
//   setTimeout(() => {
//     let error = false
//     let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
//     if (!error) {
//       callback(null, month)
//     } else {
//       callback(new Error("Sorry Data Not Found"), [])
//     }
//   }, 4000)
// }

// function tampilBulan(error, arr) {  
//   if (error != null) return console.log(error.message);
//   arr.map((element) => console.log(element))
// }

// getMonth(tampilBulan);

// 3. 2 program bebas menggunakan promise
// Cek apakah input number
// const cekNomor = (num) => {
//   return new Promise((resolve, reject)=> {
//       if (!isNaN(num)) {
//         resolve(num+" : Termasuk nomor");
//       } else {
//         reject(new Error(num+" : Bukan nomor"));
//       }
//   });
// }
// cekNomor('senin')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// Cek akar kuadrat
// const cekKuadrat = (num) => {
//   return new Promise((berhasil, gagal)=> {
//     const bool = Number.isInteger(Math.sqrt(num))
//       if (bool) {
//         berhasil(num+" adalah kuadrat sempurna");
//       } else {
//         gagal(new Error(num+" bukan kuadrat sempurna"));
//       }
//   });
// }

// cekKuadrat(70)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });


// 4.
// async function getApi() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     // console.log(data[0]);
//     const dataBaru = [];
//     data.forEach((element) => {
//       dataBaru.push(element.name)
//     });
//     console.log(dataBaru);
//   } catch (error) {
//     console.log("Error fetching API");
//     console.log(error);
//   }
// }

// getApi();