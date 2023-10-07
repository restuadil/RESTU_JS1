// if else and nested if

let nilai = 100; //ubah nilai disini

if (nilai >= 80) {
    console.log(`Nilai kamu ${nilai} sangat baik`);
} else if (nilai >= 70) {
    console.log(`Nilai kamu ${nilai} cukup`);
} else {
    console.log(`Nilai kamu ${nilai} kurang`);
}

// switch case
let hari = "Selasa"; // ubah hari di sini

switch (hari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
        console.log(`Hari ini hari ${hari} Saatnya Bekerja`);
        break;
    case "Sabtu":
    case "Minggu":
        console.log(`Hari ini hari ${hari} Saatnya  Libur`);
        break;
    default:
        console.log("Hari tidak valid");
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`Hasil Looping ke  ${i}`);
}

// while loop 
let angka = 1; //ubah angka disini

while (angka <= 5) {
    console.log(`Angka: ${angka}`);
    angka++;
}
// do while
let count = 1; // ubah angka disini
do {
    console.log(`Angka: ${count}`);
    count++;
} while (count <= 5);

// function 
function tambah(a, b) {
    let hasilTambah = a + b;
    console.log(`Hasil tambah dari ${a} + ${b} = ${hasilTambah}`);
}
tambah(2, 3); // ubah angka disini
