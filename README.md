# portafolio

The given code is a simple text encryption and decryption script written in JavaScript. It uses a set of vowel replacements to encrypt the input text and then reverses the process to decrypt it. The code also includes event listeners for the "Encrypt" and "Decrypt" buttons and renders the output on the page.

Let's go through the code step by step:

Variables and DOM elements are defined:



'use strict';
let { value: text } = document.querySelector("#form_text-area");
let output = document.querySelector("#aside_main");
let encrypt = document.querySelector("#form_button-encrypt");
let decrypt = document.querySelector("#form_button-decrypt");


The renderOutput() function is defined to display an initial message and an image when the page loads:



function renderOutput() {
    output.innerHTML = `
    <picture>
        <source srcset="encrypter/assets/images/Muñeco.png" media="(min-width: 800px)">
        <source srcset="encrypter/assets/images/Muñeco.png" media="(min-width: 500px)">
        <img src="encrypter/assets/images/Muñeco.png" alt="Encrypter">
    </picture>
    <h2>Ningun texo ha sido ingresado</h2>
    `;
}



The encryptText() function is defined to encrypt the input text by replacing vowels with specific strings:



const encryptText = () => {
    let text = "";
    if (input !== null && input.value !== "") {
        text = input.value;
    } else {
        throw new Error("Invalid input");
    }

    let vowelReplacements = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    text = text.replace(/a|e|i|o|u/g, match => vowelReplacements[match]);
    return text;
}




The renderText() function is defined to display the encrypted or decrypted text on the page:



let renderText = (a) => {
    output.innerHTML = '';
    let text = a;
    output.innerHTML = `<p>\${text}</p>`;
    input.value = '';
}


The decryptText() function is defined to decrypt the encrypted text by reversing the vowel replacements:



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
    });
    return text;
}



Event listeners are added for the "Encrypt" and "Decrypt" buttons to call the respective functions and render the text on the page:



decrypt.addEventListener('click', () => {
    const decryptedText = decryptText();
    renderText(decryptedText);
});

encrypt.addEventListener("click", () => {
    const encryptedText = encryptText();
    renderText(encryptedText);
});




Finally, the renderOutput() function is called when the page loads:



window.addEventListener('load', renderOutput);

