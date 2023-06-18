// Acessar elementos do DOM
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const confirmarSenhaInput = document.getElementById('confirmeSenha');
const termosCheckbox = document.getElementById('myCheckbox');
const cancelButton = document.querySelector('button[type="cancel"]');
const submitButton = document.querySelector('button[type="submit"]');

// Adicionar evento de clique ao botão de cancelar
cancelButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  limparFormulario(); // Limpa os campos do formulário
});

// Adicionar evento de envio ao formulário
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  if (validarFormulario()) {
    // Executa ação de envio do formulário (pode ser substituída pelo seu código)
    alert('Formulário enviado com sucesso!');
    limparFormulario();
  }
});

// Limpar campos do formulário
function limparFormulario() {
  nomeInput.value = '';
  emailInput.value = '';
  senhaInput.value = '';
  confirmarSenhaInput.value = '';
  termosCheckbox.checked = false;
}

// Validar campos do formulário
function validarFormulario() {
  if (nomeInput.value.trim() === '') {
    alert('O campo Nome é obrigatório.');
    return false;
  }

  if (emailInput.value.trim() === '') {
    alert('O campo Email é obrigatório.');
    return false;
  }

  if (senhaInput.value.trim() === '') {
    alert('O campo Senha é obrigatório.');
    return false;
  }

  if (senhaInput.value !== confirmarSenhaInput.value) {
    alert('As senhas não coincidem.');
    return false;
  }

  if (!termosCheckbox.checked) {
    alert('É necessário concordar com os termos de uso.');
    return false;
  }

  return true;
}
