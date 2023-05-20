let textArea = document.querySelector('#inputText')
let finalMessage = document.querySelector('#finalMessage')
let criptButton = document.querySelector('#criptButton')
let decriptButton = document.querySelector('#decriptButton')
let copyBtn = document.querySelector('#copy')
let image = document.getElementById("image");

criptButton.addEventListener('click', () => {
    let splitText = textArea.value.split("")
    let criptMessage = ''
    
    splitText.forEach(elem => {
        if(elem == 'e') {
            elem = 'enter'
        } 
        if (elem == 'i') {
            elem = 'imes'
        }
        if (elem == 'a') {
            elem = 'ai'
        }
        if (elem == 'o') {
            elem = 'ober'
        }
        if (elem == 'u') {
            elem = 'ufat'
        }
        criptMessage += elem
    });
    finalMessage.style.backgroundImage = "url()"

    finalMessage.value = criptMessage
})

decriptButton.addEventListener('click', () => {
    let decriptText = textArea.value

    decriptText = decriptText.replace(/ai/g, 'a');
    decriptText = decriptText.replace(/imes/g, 'i');
    decriptText = decriptText.replace(/enter/g, 'e');
    decriptText = decriptText.replace(/ober/g, 'o');
    decriptText = decriptText.replace(/ufat/g, 'u');

    finalMessage.style.backgroundImage = "url()"

    finalMessage.value = decriptText
    
})

copyBtn.addEventListener('click', () => {
    finalMessage.select()
    finalMessage.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(finalMessage.value)
})

function check() {
    console.log('ola')
    if(finalMessage.textContent) {
        finalMessage.style.backgroundImage = "url('assets/High\ quality\ products\ 1\ 1.svg')"
    } else {
        finalMessage.style.backgroundImage = "url()"
    }
}

check()