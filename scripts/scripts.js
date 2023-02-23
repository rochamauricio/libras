var botaoProximo = document.getElementById('proximo');
var botaoAnterior = document.getElementById('anterior');
var imgTeste = document.getElementById('imgTeste');
var titulo = document.getElementById('titulo');
var opcao = document.getElementById('opcoes');
var legendaTeste = document.getElementById('legendaTeste');

arrayPos = 14;

function proxima() {
    arrayPos += 1;
    if (opcao.value == "numero" && arrayPos >= 14)
        arrayPos = 0;
    else if (opcao.value == "alfabeto" && arrayPos > 40)
        arrayPos = 14;
    else if (opcao.value == "palavrasA" && arrayPos >= 119) {
        arrayPos = 41;
    }

    imgTeste.src = dicionario[arrayPos].url;
    legendaTeste.innerHTML = dicionario[arrayPos].palavra;
}

function anterior() {

    arrayPos -= 1;
    if (opcao.value == "numero" && arrayPos < 0)
        arrayPos = 13;
    else if (opcao.value == "alfabeto" && arrayPos < 14)
        arrayPos = 40;
    else if (opcao.value == "palavrasA" && arrayPos < 41) {
        arrayPos = 118;
    }

    imgTeste.src = dicionario[arrayPos].url;
    legendaTeste.innerHTML = dicionario[arrayPos].palavra;
}  

function mudaOpcao() {
    if (opcao.value == "numero") {
        titulo.innerHTML = "Números";
        arrayPos = 0;    
        imgTeste.src = dicionario[arrayPos].url;
        legendaTeste.innerHTML = dicionario[arrayPos].palavra;
    }
    else if (opcao.value == "alfabeto") {
        titulo.innerHTML = "Letras do Alfabeto";
        arrayPos = 14;
        imgTeste.src = dicionario[arrayPos].url;
        legendaTeste.innerHTML = dicionario[arrayPos].palavra;
    } else if (opcao.value == "palavrasA"){
        titulo.innerHTML = "Palávras com A";
        arrayPos = 41;
        imgTeste.src = dicionario[arrayPos].url;
        legendaTeste.innerHTML = dicionario[arrayPos].palavra;
    }
}

botaoProximo.addEventListener('click', proxima);
botaoAnterior.addEventListener('click', anterior);
opcoes.addEventListener('change', mudaOpcao);