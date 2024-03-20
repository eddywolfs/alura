function encrip() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let modelo = document.getElementById("modelo");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imesr")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "El texto ha sido encriptado";
        parrafo.textContent = "";
    } else {
        tituloMensaje.textContent = "No se ha encontrado mensaje";
        parrafo.textContent = "Ingresa el texto a encriptar";
        alert("Ingresa el texto");
    }
}

function desencrip() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let modelo = document.getElementById("modelo");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imesr/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "El texto ha sido desencriptado";
        parrafo.textContent = "";
    } else {
        tituloMensaje.textContent = "No se ha encontrado mensaje";
        parrafo.textContent = "Ingresa el texto a encriptar";
        alert("Ingresa el texto");
    }
}