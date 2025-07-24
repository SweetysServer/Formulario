document.getElementById("Login").addEventListener("submit", function(event) {
const idade =
  parseInt(document.getElementById("Idade").value, 10);

  if(idade < 18) {
    alert("Voce precisa ter mais de 18 anos para continuar")
    event.preventDefault();
  }
});






