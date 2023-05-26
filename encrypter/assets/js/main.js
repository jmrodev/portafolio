'use strict'
let input = document.querySelector("#form_text-area");
let output = document.querySelector("#aside_main");
let encrypt = document.querySelector("#form_button-encrypt");
let decrypt = document.querySelector("#form_button-decrypt");
const copyButton = document.getElementById("copy_btn");

window.addEventListener('load', renderOutput);
const vowelReplacements = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};
const encryptText = () => {
    let text = "";

    text = input.value;
    if (text === text.toUpperCase()) {
        alert("Solo se aceptan letras minusculas");
        return;
    }

    if (text.match(/[0-9]/g)) {
        alert("No se aceptan numeros");
        return;
    }

    if (text.match(/[!@#$%^&*(),.?":{}|<>]/g)) {
        alert("No se aceptan caracteres especiales");
        return;
    }

    if (text === "") {
        alert("No se aceptan campos vacios");

        return;
    }

    if (text.match(/[áéíóú]/g)) {
        alert("No se aceptan acentos");
        return;
    }
    
    text = text.replace(/a|e|i|o|u/g, match => vowelReplacements[match]);

    return text;
};

function renderOutput() {
    output.innerHTML = `
    
    <picture>
        <source srcset="encrypter/assets/images/Muñeco.png" media="(min-width: 800px)">
        <source srcset="encrypter/assets/images/Muñeco.png" media="(min-width: 500px)">
        <img src="encrypter/assets/images/Muñeco.png" alt="Encrypter">
    </picture>
    
    <h2>Ningun texo ha sido ingresado</h2>
    `
}

let renderText = (a) => {

    output.innerHTML = '';

    let text = a;

    output.innerHTML = `<p>${text}</p>`

    input.value = ''
}

let decryptText = () => {

    let text = input.value;

    let vowelsEncryp = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };

    text = text.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        return vowelsEncryp[match];
    }
    )
    return text;
}


decrypt.addEventListener('click', () => {
    const decryptedText = decryptText();
    renderText(decryptedText);
});

encrypt.addEventListener("click", () => {
    const encryptedText = encryptText();
    renderText(encryptedText);
}
)



copyButton.addEventListener('click', async (e) => {
    console.log('copying to clipboard');

    try {
        await navigator.clipboard.writeText(output.textContent);
    }
    catch (err) {
      console.error('Could not write to clipboard', err);
    }
  
  });




