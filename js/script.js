// ini file javascript

function validateForm() {
    // ambil inputan

    let input = document.getElementById('main-input').value;
    console.log(input);

    if (input.value == '') {
        alert('Isikan angka!');
    } else {
        // proses konversi
        let calc = convertToFahrenheit(input);

        // tampilkan hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('cara-konversi').innerHTML =
            '<br>1. Diketahui suhu (°C) = ' + input + '°C<br><br>' +
            '2. Berapa suhu (°F) nya?<br><br>' +
            '3. Rumus menghitung konversi suhu (°C) ke suhu (°F) = <strong>(C * 9/5) + 32</strong><br><br>' +
            '4. Rumus perhitungan = (' + input + ' * 9/5) + 32)' +
            '    = (' + input + ' * 9/5 ) = ' + input * 9 / 5 +
            '    . Tambah dengan 32, 32 + ' + input * 9 / 5 + ' = ' + ((input * 9 / 5) + 32) + '<br><br>' +
        '5. Maka hasil dari ' + input + '°C' + ' adalah ' + calc + '°F';

    }
}

function resetForm() {
    // Reset nilai input suhu Celcius
    document.getElementById('main-input').value = '';

    // Reset hasil konversi Fahrenheit
    document.getElementById('main-result').value = '';

    // Reset penjelasan konversi
    document.getElementById('cara-konversi').innerHTML = '';

    // Reset semua elemen lainnya jika diperlukan
    // Contoh: document.getElementById('other-element').value = '';
}


// rumus konversi
let convertToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
}

