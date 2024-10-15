document.getElementById("btnTambah").addEventListener("click", function() {
    const bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    const bilangan2 = parseFloat(document.getElementById("bilangan2").value);
    
    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        const hasil = bilangan1 + bilangan2;
        document.getElementById("hasil").textContent = hasil;
    } else {
        alert("Harap masukkan kedua bilangan dengan benar.");
    }
});

document.getElementById("btnReset").addEventListener("click", function() {
    document.getElementById("bilangan1").value = '';
    document.getElementById("bilangan2").value = '';
    document.getElementById("hasil").textContent = '0';
});
