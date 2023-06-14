const text_area = document.querySelector(".texto");
const text_area_encriptado = document.querySelector(".texto2");
const ningun_mensaje = document.querySelector(".ningun_mensaje");


function Encriptar() {
        const textoEncriptado = encriptar(text_area.value);
        text_area_encriptado.value = textoEncriptado;
        text_area.value = "";
        text_area_encriptado.style.backgroundImage = "none"
        ningun_mensaje.textContent= ""
}

function Desencriptar() {
        const textoDesencriptado = desencriptar(text_area.value);
        text_area_encriptado.value = textoDesencriptado;
        text_area.value = "";
        text_area_encriptado.style.backgroundImage = "none"
        ningun_mensaje.textContent= ""
}


// Función para encriptar un texto
        function encriptar(texto) {
        // Reemplazar "e" con "enter"
        texto = texto.toLowerCase();

        texto = texto.replace(/e/g, "enter");

        // Reemplazar "i" con "imes"
        texto = texto.replace(/i/g, "imes");

        // Reemplazar "a" con "ai"
        texto = texto.replace(/a/g, "ai");

        // Reemplazar "o" con "ober"
        texto = texto.replace(/o/g, "ober");

        // Reemplazar "u" con "ufat"
        texto = texto.replace(/u/g, "ufat");

        // Devolver texto encriptado
        return texto;
        }

        // Función para desencriptar un texto
        function desencriptar(texto_encriptado) {
        // Reemplazar "ufat" con "u"
        texto_encriptado = texto_encriptado.replace(/ufat/g, "u");

        // Reemplazar "ober" con "o"
        texto_encriptado = texto_encriptado.replace(/ober/g, "o");

        // Reemplazar "ai" con "a"
        texto_encriptado = texto_encriptado.replace(/ai/g, "a");

        // Reemplazar "imes" con "i"
        texto_encriptado = texto_encriptado.replace(/imes/g, "i");

        // Reemplazar "enter" con "e"
        texto_encriptado = texto_encriptado.replace(/enter/g, "e");

        // Devolver texto desencriptado
        return texto_encriptado;
        }


