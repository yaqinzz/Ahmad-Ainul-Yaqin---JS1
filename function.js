function operasi(a, b, callback) {
  var hasil = callback(a, b);
  return hasil;
}

function penjumlahan(x, y) {
  return x + y;
}

function pengurangan(x, y) {
  return x - y;
}

var hasilPenjumlahan = operasi(5, 3, penjumlahan);
var hasilPengurangan = operasi(8, 2, pengurangan);

console.log("Hasil penjumlahan: " + hasilPenjumlahan);
console.log("Hasil pengurangan: " + hasilPengurangan);
