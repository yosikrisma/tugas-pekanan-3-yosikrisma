//Fungsi Perhitungan Akar

function aljabar(x) {
    if (x<0) {
        console.log("Tidak bisa input bilangan negatif");
        return;
    }
    if (x % 2 === 1) {
        console.log("Tidak bisa input bilangan ganjil");
        return;
    }
    var hasil = Math.sqrt(x)
    console.log("Hasil perhitunganya adalah", hasil);
}

aljabar(-1);
aljabar(5);
aljabar(16);
