//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let amigo = '';
let resultado = '';

function adicionarAmigo() {
    amigo = document.querySelector('input').value;
    console.log(listaDeAmigos);

    if (amigo == ''){
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(amigo);
        limparCampo();
        atualizarLista(listaDeAmigos)
    }

}

function atualizarLista(listaDeAmigos) {
    // Obter o elemento da lista
    const lista = document.getElementById("listaAmigos");
    
    // Limpar a lista existente
    lista.innerHTML = "";
    
    // Percorrer o array amigos e adicionar elementos à lista
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(listaDeAmigos) {
    // Validar se há amigos disponíveis
    if (listaDeAmigos.length === 0) {
        document.getElementById("resultado").innerHTML = "Nenhum amigo disponível para sorteio.";
        return;
    }
    
    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    
    // Obter o nome sorteado
    let amigoSorteado = listaDeAmigos[indiceSorteado];
    
    // Mostrar o resultado
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;}

function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
    resultado = document.getElementById("resultado").innerHTML = '';
}