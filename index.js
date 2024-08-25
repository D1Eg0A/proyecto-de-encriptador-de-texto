
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let bot = document.getElementById("bot");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "ines")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        bot.src = "./img/encriptado.jpg";
    } else {
        bot.src = "./img/bot.jpg"
        tituloMensaje.textContent = "ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
        alert("debes ingresar algun texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let bot = document.getElementById("bot");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/ines/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");


    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        bot.src = "./img/desencriptar.jpeg";
    } else {
        bot.src = "./img/bot.jpg"
        tituloMensaje.textContent = "ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa el texto que deseas encriptar o desencriptar";
        alert("debes ingresar algun texto")

    }
}
