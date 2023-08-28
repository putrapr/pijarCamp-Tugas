function pijarFood(harga, voucher, jarak, pajakBoolean) {
  let diskon = 0, ongkir = 0, pajak = 0;
 
  // Menentukan diskon
  if (voucher == 'PIJARFOOD5') {
    if (harga >= 50000) {
      diskon = harga * 0.5;
      if (diskon > 50000) {
        diskon = 50000;
      }    
    }
  } else if (voucher == 'DITRAKTIRPIJAR') {
    if (harga >= 25000) {
      diskon = harga * 0.6;
      if (diskon > 30000) {
        diskon = 30000;
      }    
    }
  }

  // Menentukan ongkir
  if (jarak > 2) {
    jarak = jarak - 2;
    ongkir = 5000 + (jarak * 3000);
  } else {
    ongkir = 5000;
  }

  // Menambahkan biaya pajak
  if (pajakBoolean) {
    pajak = harga * 0.05;
  }

  const subtotal = harga - diskon + ongkir + pajak;
  console.log(`
  Harga       : ${harga} 
  Potongan    : ${diskon}
  Biaya Antar : ${ongkir}
  Pajak       : ${pajak}
  Subtotal    : ${subtotal}
  `);
}

pijarFood(75000, 'PIJARFOOD5', 5, true);