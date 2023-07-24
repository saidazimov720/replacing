function replace() {
    const text = document.getElementById('textinput').value;
    const replace = document.getElementById('replace').value;
    const word = document.getElementById('word').value;

    if (text === "" || replace === "" || word ==="") {
        alert("Barcha bo'limalrni to'liq to'ldiring.")
    }
}