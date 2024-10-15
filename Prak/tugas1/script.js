let screen = document.getElementById('calculatorScreen');
let currentExpression = ''; // Menyimpan semua ekspresi matematika

function appendNumber(number) {
    if (screen.innerText === '0' || screen.innerText === 'Error') {
        screen.innerText = number;
    } else {
        screen.innerText += number;
    }
    currentExpression += number; // Menambahkan angka ke ekspresi
}

function appendOperator(operator) {
    if (screen.innerText !== 'Error') {
        currentExpression += operator; // Menyimpan operator di ekspresi
        screen.innerText = ''; // Tidak menampilkan operator di layar
    }
}

function clearScreen() {
    screen.innerText = '0';
    currentExpression = ''; // Kosongkan ekspresi
}

function deleteLast() {
    if (screen.innerText.length > 1 && screen.innerText !== 'Error') {
        screen.innerText = screen.innerText.slice(0, -1);
        currentExpression = currentExpression.slice(0, -1); // Hapus karakter terakhir di ekspresi
    } else {
        screen.innerText = '0';
        currentExpression = ''; // Kosongkan ekspresi jika tinggal 1 karakter
    }
}

function calculate() {
    try {
        let result = eval(currentExpression); // Hitung berdasarkan ekspresi
        screen.innerText = result;
        currentExpression = result.toString(); // Update ekspresi dengan hasilnya
    } catch {
        screen.innerText = 'Error';
        currentExpression = ''; // Reset ekspresi jika terjadi error
    }
}
