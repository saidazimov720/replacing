function replace() {
    const text = document.getElementById('textinput').value;
    const replace = document.getElementById('replace').value;
    const word = document.getElementById('word').value;

    // if (text === "" || replace === "" || word ==="") {
    //     alert("Barcha bo'limlarni to'liq to'ldiring.")
    //     return;
    // }
    const textreplace = text.replace(new RegExp(replace, 'gi'), word );

    document.getElementById("result").innerHTML = textreplace;
}