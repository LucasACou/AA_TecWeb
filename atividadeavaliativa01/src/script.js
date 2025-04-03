// Array para armazenar as tarefas
let tarefas = [];

// Função para mostrar a seção de cadastro
function mostrarCadastro() {
    document.getElementById('cadastro').style.display = 'block';
    document.getElementById('lista').style.display = 'none';
}

// Função para mostrar a seção de lista
function mostrarLista() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('lista').style.display = 'block';
    atualizarLista();
}