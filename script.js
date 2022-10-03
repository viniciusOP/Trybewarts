// -- Validação do login --

const getEmail = document.getElementById('input-email');
const getPassword = document.getElementById('input-password');
const getButton = document.getElementById('login-button');

function loginValidation() {
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

getButton.addEventListener('click', loginValidation);

// --contador de número de caracteres --

const getTextArea = document.querySelector('#textarea');

getTextArea.addEventListener('input', () => {
  const getCounter = document.querySelector('#counter');
  const getTextAreaValue = document.querySelector('#textarea').value;
  const character = (500 - getTextAreaValue.length);
  getCounter.innerHTML = character;
});
