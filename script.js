function encriptar() {
  var texto = document.getElementById("text-input").value;
  var textoEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  var output = document.getElementsByClassName("output-section")[0];
  output.innerHTML = "";

  var parrafo = document.createElement("p");
  parrafo.classList.add("output-response");
  parrafo.id = "parrafo";
  parrafo.innerHTML = textoEncriptado;

  output.appendChild(parrafo);
  output.classList.add("output-response");

  crearBotonCopiar();
}

function desencriptar() {
  var texto = document.getElementById("text-input").value;
  var textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  var output = document.getElementsByClassName("output-section")[0];
  output.innerHTML = "";
  var parrafo = document.createElement("p");
  parrafo.classList.add("output-response");
  parrafo.id = "parrafo";
  parrafo.innerHTML = textoDesencriptado;

  output.appendChild(parrafo);
  output.classList.add("output-response");

  crearBotonCopiar();
}

// Función para crear el botón de copiar
function crearBotonCopiar() {
  var output = document.getElementsByClassName("output-section")[0];

  var botonContenedor = document.createElement("div");
  botonContenedor.classList.add("button");

  var botonCopiar = document.createElement("div");
  botonCopiar.classList.add("button1");
  botonCopiar.innerText = "Copiar";

  botonContenedor.appendChild(botonCopiar);
  output.appendChild(botonContenedor);
  botonContenedor.onclick = copiar;
}

// Función para copiar texto al portapapeles
function copiar() {
  var texto = document.getElementById("parrafo").textContent;

  // Verificar si navigator.clipboard está disponible
  if (navigator.clipboard) {
    navigator.clipb1oard
      .writeText(texto)
      .then(() => {
        alert("Texto copiado en el portapapeles");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  } else {
    // Método alternativo para copiar el texto
    var textArea = document.createElement("textarea");
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      alert("Texto copiado en el portapapeles");
    } catch (err) {
      console.error("Error copying text: ", err);
    }
    document.body.removeChild(textArea);
  }
}

// funcion para escuchar cada tecla que se presiona y validar que sean solo letras y en minuscula
function validarTexto(event) {
  var input = event.target;
  var value = input.value;
  var regex = /^[a-z ]*$/; // Permite solo letras minúsculas y espacios

  if (!regex.test(value)) {
    alert("Solo se permiten letras minúsculas y sin acentos");
    input.value = value.slice(0, -1); // Elimina el último carácter ingresado
  }
}

//aqui activamos la escucha de cada input
document.getElementById("text-input").addEventListener("input", validarTexto);
