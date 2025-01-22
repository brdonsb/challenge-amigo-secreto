let listaDeAmigos = [];

//adiciona nome à lista de amigos.
function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo == ''){
        alert('Por favor, insira um nome.');
    }else{
        listaDeAmigos.push(amigo);
        document.getElementById('amigo').value = '';
    }
    escreveNomesAmigos();
}

//escreve na tela a lista de amigos adicionados
function escreveNomesAmigos(){
    let lista = document.getElementById('listaAmigos');
    let contador = 0;
    lista.innerHTML = '';
    while(contador < listaDeAmigos.length){
        lista.innerHTML += `<li>${listaDeAmigos[contador]}</li>`;
        contador++;
    }
}

//sorteia um amigo da lista e escreve seu nome na tela
function sortearAmigo(){
    let amigoSorteado;
    let sorteadoResultadoNaTela = document.getElementById('resultado');
    if(listaDeAmigos == ''){
        alert('Por favor, insira um nome.');
    }else{
        amigoSorteado = Math.floor(Math.random() * listaDeAmigos.length);
        sorteadoResultadoNaTela.innerHTML = '';
        sorteadoResultadoNaTela.innerHTML = `<li>O amigo secreto é: ${listaDeAmigos[amigoSorteado]}</li>`;
    }    
}