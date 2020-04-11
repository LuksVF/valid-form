const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkPassword = document.getElementById('check-password');
let modal = document.querySelector(".modal");

//Error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Valid Email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Este email não é válido');
    }
}

//Required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === '') {
            showError(input, 'Campo obrigatório');
        } else {
            showSuccess(input);
        }
    })
}

//Input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `Deve ter no mínimo ${min} caracteres`)
    } else if (input.value.length > max) {
        showError(input, `Deve ter no máximo ${max} caracteres`)
    } else {
        showSuccess(input);
    }
}

//Password match
function checkPasswordsMatch(input1, input2){
    if(input1.value != input2.value) {
        showError(input2, 'Erro na confirmação da senha')
    } else if(input2.value == "") {
        showError(input2, 'Erro na confirmação da senha')
    } else {
        showSuccess(input2);
    }
}

//Modal
function activateModal() {
    modal.style.visibility = "visible";   
}

//Close Modal
function closeModal(){
    modal.style.visibility = "hidden";
}

//Event Listeners
form.addEventListener('submit', function(e) {
    let inputs = document.querySelectorAll(".success");
    e.preventDefault();
    checkRequired([username, email, password, checkPassword]);
    if(inputs.length == 4) {
        activateModal();
    }
})