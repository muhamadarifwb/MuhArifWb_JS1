// If else
var nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// Nested if
var jenisKelamin = "pria";
var usia = 25;

if (jenisKelamin === "pria") {
  if (usia >= 18) {
    console.log("Pria dewasa");
  } else {
    console.log("Pria di bawah umur");
  }
} else {
  console.log("Bukan pria");
}

// Switch Case
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu");
    break;
  default:
    console.log("Hari ini adalah hari lainnya");
}

// For Statement
for (var i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
  }

//   While, Do While
var angka = 1;

// While loop
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// Do-while loop
do {
  console.log("Ini akan dijalankan sekali");
} while (false);


// function
function kali(a, b) {
    return a * b;
  }
  var hasilPerkalian = kali(5, 3);
  console.log("Hasil perkalian: " + hasilPerkalian);
  