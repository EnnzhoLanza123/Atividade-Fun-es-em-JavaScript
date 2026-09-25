// Seleciona os elementos do HTML usando as classes
const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

// Função para alterar a mensagem na página
function mostrarMensagem() {
    mensagem.textContent = "💻 Você sabia? O primeiro bug de computador registrado foi uma mariposa de verdade presa dentro de um computador em 1947!";
    mensagem.style.color = "#28a745"; // Muda a cor do texto para verde
    mensagem.style.fontWeight = "bold"; // Deixa o texto em negrito
}

// Adiciona o evento de clique ao botão para executar a função
botao.addEventListener("click", mostrarMensagem);
