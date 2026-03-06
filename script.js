// Nosso Array que guardará os dados.
    let listaCompras = [];

    // Função para adicionar item.
    function adicionar() {
        let input = document.getElementById("itemInput");
        let nome = input.value.trim();

        if (nome !== "") {
            listaCompras.push(nome); // Adiciona no fim do array.
            input.value = ""; // Limpa o campo.
            atualizarLista(); // Atualiza a tela.
        }
    }

    // Função para remover item pela posição.
    function remover(posicao) {
        listaCompras.splice(posicao, 1); // Remove 1 item naquela posição.
        atualizarLista();
    }

    // Função para pesquisar.
    function pesquisar() {
        let busca = document.getElementById("buscaInput").value.toLowerCase();
        
        // Tenta achar pelo índice número ou pelo nome.
        let indiceEncontrado = listaCompras.indexOf(busca); // Procura o texto.
        
        if (listaCompras[busca] !== undefined) {
            alert("Item na posição " + busca + ": " + listaCompras[busca]);
        } else if (indiceEncontrado !== -1) {
            alert("O item '" + busca + "' está na posição: " + indiceEncontrado);
        } else {
            alert("Item não encontrado!");
        }
    }

    // Função para mostrar a lista na tela.
    function atualizarLista() {
        let ul = document.getElementById("listaExibicao");
        ul.innerHTML = ""; // Limpa a lista antes de desenhar de novo.

        // Percorre o array e cria os itens da lista.
        listaCompras.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${index}: ${item} <button class="btn-remover" onclick="remover(${index})">x</button>`;
            ul.appendChild(li);
        });
    }
