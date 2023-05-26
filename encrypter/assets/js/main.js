'use strict'
let input = document.querySelector("#form_text-area");
let output = document.querySelector("#aside_main");
let encrypt = document.querySelector("#form_button-encrypt");
let decrypt = document.querySelector("#form_button-decrypt");

window.addEventListener('load', renderOutput);
const vowelReplacements = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
};

const encryptText = () => {
  let input = document.querySelector("#form_text-area[type='text']");
  let text = "";
  if (input !== null && input.value.trim() !== "") {
    if (/[^a-z\s]/i.test(input.value)) {
      throw new Error("Input contains special characters");
    }
    if (/[A-Z]/.test(input.value)) {
      throw new Error("Input contains uppercase letters");
    }
    text = input.value.trim();
  } else {
    throw new Error("Invalid input");
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
