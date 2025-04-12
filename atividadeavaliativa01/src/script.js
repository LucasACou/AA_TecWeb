let itens = [];

function mostrarCadastro() {
  document.getElementById("cadastro").style.display = "block";
  document.getElementById("lista").style.display = "none";
}

function mostrarLista() {
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("lista").style.display = "block";
  atualizarLista();
}

document.getElementById("formItem").addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;

  if (!titulo) {
    document.getElementById("erroTitulo").textContent =
      "O título é obrigatório";
    return;
  } else {
    document.getElementById("erroTitulo").textContent = "";
  }

  const item = {
    id: Date.now(),
    titulo: titulo,
    descricao: descricao,
    data: new Date().toLocaleDateString("pt-BR"),
  };

  itens.push(item);

  document.getElementById("formItem").reset();

  alert("Item adicionado com sucesso!");

  mostrarLista();
});

function atualizarLista() {
  const listaItens = document.getElementById("lista-itens");
  const semItens = document.getElementById("sem-itens");

  if (itens.length === 0) {
    semItens.style.display = "block";
    listaItens.innerHTML = "";
    return;
  }

  semItens.style.display = "none";

  let html = "";
  for (let i = 0; i < itens.length; i++) {
    html += `
            <li class="item">
                <div class="item-conteudo">
                    <h3>${itens[i].titulo}</h3>
                    <p>${itens[i].descricao || "Sem descrição"}</p>
                    <small>Data: ${itens[i].data}</small>
                </div>
                <button class="botao-remover" onclick="removerItem(${
                  itens[i].id
                })">Remover</button>
            </li>
        `;
  }
  listaItens.innerHTML = html;
}

function removerItem(id) {
  if (confirm("Tem certeza que deseja remover este item?")) {
    itens = itens.filter(function (item) {
      return item.id !== id;
    });

    atualizarLista();
  }
}

mostrarCadastro();
