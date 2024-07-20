function encriptar() {
  validarInput();

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
  validarInput();
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

function crearBotonCopiar() {
  var output = document.getElementsByClassName("output-section")[0];

  var botonCopiar = document.createElement("button");
  botonCopiar.classList.add("secondary");
  botonCopiar.id = "btnCopiar";

  var spanButton = document.createElement("span");
  spanButton.classList.add("text-button");

  spanButton.innerText = "Copiar";
  botonCopiar.appendChild(spanButton);

  output.appendChild(botonCopiar);

  botonCopiar.onclick = copiar;
}

function copiar() {
  var texto = document.getElementById("parrafo").textContent;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado en el  portapapeles");
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
}

function validarInput() {
  var input = document.getElementById("text-input");
  var regex = /^[a-z\s]+$/;

  if (!regex.test(input.value)) {
    alert("Solo se permiten letras minúsculas y espacios en blanco.");
    input.value = "";
  }
}
