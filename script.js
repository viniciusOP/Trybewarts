const getEmail = document.getElementById('input-email');
const getPassword = document.getElementById('input-password');
const getButtonLogin = document.getElementById('login-button');
const getButtonSubmit = document.getElementById('submit-btn');
const checkBoxAgreement = document.querySelector('#agreement');
const getCounter = document.querySelector('#counter');
const getTextArea = document.querySelector('#textarea');
const getTextAreaValue = document.querySelector('#textarea').value;

getButtonSubmit.disabled = true;

function loginValidation() {
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function disabledSubmit() {
  if (checkBoxAgreement.checked) {
    getButtonSubmit.disabled = false;
  } else {
    getButtonSubmit.disabled = true;
  }
}

function characterCounter() {
  const character = (500 - getTextAreaValue.length);
  getCounter.innerHTML = character;
}

getButtonLogin.addEventListener('click', loginValidation);
checkBoxAgreement.addEventListener('change', disabledSubmit);
getTextArea.addEventListener('input', characterCounter);
