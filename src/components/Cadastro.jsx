import React, { useState } from 'react';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [termosServico, setTermosServico] = useState(false);

  const handleCadastro = (e) => {
    e.preventDefault();

    // Aqui você pode fazer a chamada para o código Java, enviando os parâmetros coletados
    // Você pode usar uma biblioteca como Axios para fazer a requisição HTTP ao seu backend Java

    // Exemplo de código para enviar os dados para o backend Java
    const dadosCadastro = {
      nome,
      email,
      senha,
      confirmarSenha,
      termosServico
    };

    // Chamar a API Java para enviar os dados do formulário
    // axios.post('/api/cadastro', dadosCadastro)
    //   .then(response => {
    //     // Lógica para lidar com a resposta do backend
    //   })
    //   .catch(error => {
    //     // Lógica para lidar com erros
    //   });

    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setTermosServico(false);
  };

  return (
    <form onSubmit={handleCadastro}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>

      <label>
        Senha:
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
      </label>

      <label>
        Confirmar Senha:
        <input type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} required />
      </label>

      <label>
        <input type="checkbox" checked={termosServico} onChange={e => setTermosServico(e.target.checked)} required />
        Concordo com os termos de serviço
      </label>

      <button type="button">Cancelar</button>
      <button type="submit">Confirmar</button>
    </form>
  );
};

export default CadastroUsuario;
