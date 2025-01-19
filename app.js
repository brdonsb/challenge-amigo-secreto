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
}