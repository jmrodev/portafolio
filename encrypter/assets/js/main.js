'use strict'

let input = document.querySelector("#form_text-area");
let output = document.querySelector("#aside_main");
let encrypt = document.querySelector("#form_button-encrypt");
let decrypt = document.querySelector("#form_button-decrypt");


window.addEventListener('load', renderOutput);


let encryptText = () => {
    let text = input.value;
    let vowels = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }
    text = text.replace(/a|e|i|o|u/g, function (match) {
        return vowels[match];
    })
    return text;
}

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

let renderEncrypt = () => {

    output.innerHTML = '';

    let text = encryptText();

    output.innerHTML = `<p>${text}</p>`

    input.value = ''
}

encrypt.addEventListener("click", renderEncrypt);
