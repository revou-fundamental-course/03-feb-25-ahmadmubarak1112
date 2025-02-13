// ini kode javascript

function validateForm() {
    let input = document.getElementById('main-input').value;
    if (input === '') {
        alert('Isikan angka!');
        return;
    }
    input = parseInt(input); // Pastikan input berupa angka bulat

    let calc = isReversed ? convertToCelsius(input) : convertToFahrenheit(input);
    document.getElementById('main-result').value = calc;
    updateExplanation(input, calc);
}

function resetForm() {
    document.getElementById('main-input').value = '';
    document.getElementById('main-result').value = '';
    document.getElementById('cara-konversi').innerHTML = '';
}

let convertToFahrenheit = (celsius) => Math.round((celsius * 9 / 5) + 32);
let convertToCelsius = (fahrenheit) => Math.round((fahrenheit - 32) * 5 / 9);

let isReversed = false;

function reverseConversion() {
    let inputField = document.getElementById('main-input');
    let resultField = document.getElementById('main-result');
    let inputLabel = document.querySelector("label[for='main-input']");
    let resultLabel = document.querySelector("label[for='main-result']");

    let inputValue = inputField.value;
    let resultValue = resultField.value;

    if (!isReversed) {
        inputLabel.innerHTML = 'Fahrenheit:';
        resultLabel.innerHTML = 'Celcius:';
        inputField.placeholder = "Masukkan angka suhu Fahrenheit";
        if (resultValue !== '') {
            inputField.value = resultValue;
            resultField.value = convertToCelsius(parseInt(resultValue));
        }
    } else {
        inputLabel.innerHTML = 'Celcius:';
        resultLabel.innerHTML = 'Fahrenheit:';
        inputField.placeholder = "Masukkan angka suhu Celcius";
        if (resultValue !== '') {
            inputField.value = resultValue;
            resultField.value = convertToFahrenheit(parseInt(resultValue));
        }
    }
    isReversed = !isReversed;

    // Hanya update penjelasan jika ada input yang valid
    if (inputField.value !== '') {
        updateExplanation(parseInt(inputField.value), parseInt(resultField.value));
    } else {
        document.getElementById('cara-konversi').innerHTML = ''; // Hapus penjelasan jika input kosong
    }
}

function updateExplanation(input, result) {
    let inputUnit = isReversed ? '°F' : '°C';
    let resultUnit = isReversed ? '°C' : '°F';
    let formula = isReversed ? '(F - 32) * 5/9' : '(C * 9/5) + 32';
    let calculation = isReversed
        ? `(${input} - 32) * 5/9 = ${(input - 32) * 5 / 9}`
        : `(${input} * 9/5) + 32 = ${(input * 9 / 5) + 32}`;

    document.getElementById('cara-konversi').innerHTML = `
        <br>1. Nilai suhu ${inputUnit} yang diinput adalah = ${input}${inputUnit}<br><br>
        2. Berapa suhu ${resultUnit} nya?<br><br>
        3. Rumus menghitung konversi suhu ${inputUnit} ke ${resultUnit} = <strong>${formula}</strong><br><br>
        4. Rumus perhitungan = ${calculation}<br><br>
        5. Maka hasil dari ${input}${inputUnit} adalah ${result}${resultUnit}`;
}
