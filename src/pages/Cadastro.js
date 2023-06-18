document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter os valores dos campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validar os campos (exemplo simples)
    if (name === "" || email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Processar os dados (exemplo: exibir no console)
    console.log("Nome: " + name);
    console.log("Email: " + email);
    console.log("Senha: " + password);
  
    // Limpar os campos (opcional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  });
  