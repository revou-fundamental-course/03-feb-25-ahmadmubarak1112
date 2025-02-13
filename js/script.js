// ini file javascript

function validateForm() {
    // console.log('Berhasil di eksekusi!');

    let input = document.getElementById('main-input');
    console.log(input.value);

    if (input.value == '') {
        alert('Tolong isi inputan!');
    } else {
        // proses konversi
        let calc = convertToCelcius(input.value);

        // tampilkan hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('cara-konversi').value = 'Diket: C= ' + input.value + ' F...';
        console.log('Berhasil di eksekusi!');
    }
}

// rumus konversi
let convertToCelcius = (input) => {
    return input * 2;
}

