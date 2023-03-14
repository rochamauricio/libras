var botaoProximo = document.getElementById('proximo');
var botaoAnterior = document.getElementById('anterior');
var imgTeste = document.getElementById('imgTeste');
var titulo = document.getElementById('titulo');
var opcao = document.getElementById('opcoes');
var legendaTeste = document.getElementById('legendaTeste');

var listaFiltrada = [];
var posicaoLista = 0;

filtrar();

function filtrar() {
    listaFiltrada = dicionario.filter(item => item.tipo == opcao.value);
    posicaoLista = 0;
    exibirSinal(0);

    if (opcao.value == "numero")
        titulo.innerHTML = "Números";
    else if (opcao.value == "alfabeto")
        titulo.innerHTML = "Letras do Alfabeto";
    else 
        titulo.innerHTML = "Palávras com " + opcao.value.toUpperCase();       

}

function exibirSinal(posicaoLista) {
    if (listaFiltrada.length > 0) {
        imgTeste.src = listaFiltrada[posicaoLista].url;
        legendaTeste.innerHTML = listaFiltrada[posicaoLista].palavra;
    }
}

function proxima() {
    posicaoLista += 1;
    if (posicaoLista >= listaFiltrada.length)
        posicaoLista = 0;
    exibirSinal(posicaoLista);
}

function anterior() {
    posicaoLista -= 1;
    if (posicaoLista < 0)
        posicaoLista = listaFiltrada.length - 1;
    exibirSinal(posicaoLista);
}  

botaoProximo.addEventListener('click', proxima);
botaoAnterior.addEventListener('click', anterior);
opcao.addEventListener('change', filtrar);