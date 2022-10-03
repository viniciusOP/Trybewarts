const getEmail = document.getElementById('email');
const getPassword = document.getElementById('input-password');
const getButtonLogin = document.getElementById('login-button');
const getButtonSubmit = document.getElementById('submit-btn');
const checkBoxAgreement = document.querySelector('#agreement');
const getCounter = document.querySelector('#counter');
const getTextArea = document.querySelector('#textarea');
const form = document.getElementById('evaluation-form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const formEmail = document.getElementById('input-email');
const house = document.getElementById('house');

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
  const getTextAreaValue = document.querySelector('#textarea').value;
  const character = (500 - getTextAreaValue.length);
  getCounter.innerHTML = character;
}

function formCard(e) {
  e.preventDefault();
  const avaliation = document.querySelector('input[name="rate"]:checked');
  const family = document.querySelector('input[name="family"]:checked');
  const tools = document.getElementsByName('tools');
  const toolsChecked = [];
  for (let i = 0; i < tools.length; i += 1) {
    if (tools[i].checked === true) {
      toolsChecked.push(tools[i].value);
    }
  }
  form.innerHTML = `<p>Nome: ${firstName.value} ${lastName.value}</p>
    <p>Email: ${formEmail.value}</p>
    <p>Casa: ${house.value}</p>
    <p>Família: ${family.value}</p>
    <p>Matérias: ${toolsChecked}</p>
    <p>Avaliação: ${avaliation.value}</p>
    <p>Observações: ${getTextArea.value}</p>`;
}

getButtonLogin.addEventListener('click', loginValidation);
checkBoxAgreement.addEventListener('change', disabledSubmit);
getTextArea.addEventListener('input', characterCounter);
getButtonSubmit.addEventListener('click', formCard);
