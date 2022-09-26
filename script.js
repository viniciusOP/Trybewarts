const getEmail = document.getElementById('email');
const getPassword = document.getElementById('password');
const getButton = document.getElementById('login-button');

// -- Validação do login --

function loginValidation() {
  if (getEmail.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

getButton.addEventListener('click', loginValidation);
