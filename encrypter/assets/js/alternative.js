'use strict';

const input = document.querySelector('#form_text-area');
const output = document.querySelector('#aside_main');
const encrypt = document.querySelector('#form_button-encrypt');
const decrypt = document.querySelector('#form_button-decrypt');
const copyButton = document.querySelector('#copy_btn');

window.addEventListener('load', renderOutput);

const vowelReplacements = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

function renderOutput() {

    output.innerHTML = `
        <picture>
            <source srcset="encrypter/assets/images/Muñeco.png" media="(min-width: 800px)">
            <source srcset="encrypter/assets/images/Muñeco.png" media="(min-width: 500px)">
            <img src="encrypter/assets/images/Muñeco.png" alt="Encrypter">
        </picture>
        <h2>Ningun texto ha sido ingresado</h2>
    `;
}

function renderText(text) {
    output.innerHTML = `<p>${text}</p>`;
    input.value = '';
}

function encryptText() {
    const text = input.value;

    if (text !== text.toLowerCase()) {
        alert('Solo se aceptan letras minusculas');
        return;
    }

    if (/\d/.test(text)) {
        alert('No se aceptan numeros');
        return;
    }

    if (/[^a-z\s]/i.test(text)) {
        alert('No se aceptan caracteres especiales');
        return;
    }

    if (text === '') {
        alert('No se aceptan campos vacios');
        return;
    }

    if (/[áéíóú]/i.test(text)) {
        alert('No se aceptan acentos');
        return;
    }

    const encryptedText = text.replace(/[aeiou]/ig, match => vowelReplacements[match]);
    return encryptedText;
}

function decryptText() {
    let text = input.value;

    const vowelsEncryp = { ...vowelReplacements, 'enter': 'e' };
    text = text.replace(/ai|enter|imes|ober|ufat/g, match => vowelsEncryp[match]);

    return text;
}

function handleButtonClick(action) {
    const text = action();
    if (text != null) {
        renderText(text);
    }
}

decrypt.addEventListener('click', () => {
    handleButtonClick(decryptText);
}
);

encrypt.addEventListener('click', () => {
    handleButtonClick(encryptText);
}

);

copyButton.addEventListener('click', async () => {
    console.log('Copying to clipboard...');
    try {
        await navigator.clipboard.writeText(output.textContent.trim());
        console.log('Copied successfully!');
    } catch (err) {
        console.error('Could not write to clipboard', err);
    }
}
);


