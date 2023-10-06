var angka;
do {
  angka = parseInt(prompt("Masukkan angka antara 1 dan 10:"));
} while (isNaN(angka) || angka < 1 || angka > 10);
console.log("Anda memasukkan angka yang valid: " + angka);
