function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;

    if (name === "" || email === "" || address === "") {
        alert("Semua field harus diisi!");
        return false;
    }
    return true;
}
