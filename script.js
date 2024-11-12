// Função para exibir os produtos na lista
function exibirProdutos(produtos) {
    const listaElement = document.getElementById("lista-produtos");
    produtos.forEach(produto => {
        const item = document.createElement("li");
        item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        listaElement.appendChild(item);
    });
}

// Função para buscar os dados do JSON usando AJAX
function carregarProdutos() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "produtos.json", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const produtos = JSON.parse(xhr.responseText);
            exibirProdutos(produtos);
        }
    };

    xhr.send();
}

// Adiciona um evento de clique ao botão para carregar os produtos
document.getElementById("btn-carregar").addEventListener("click", carregarProdutos);
