var botaoProximo = document.getElementById('proximo');
var botaoAnterior = document.getElementById('anterior');
var imagemSinal = document.getElementById('imagemSinal');
var titulo = document.getElementById('titulo');
var opcao = document.getElementById('opcoes');
var legenda = document.getElementById('legenda');
var txtPesquisa = document.getElementById('texto-pesquisa');
var labelPesquisa = document.getElementById('label-pesquisa');

var listaFiltrada = [];
var posicaoLista = 0;

filtrar();

function filtrar() {
    if (opcao.value.length == 1) {
        titulo.innerHTML = "Palávras iniciadas com " + opcao.value.toUpperCase();
        listaFiltrada = dicionario.filter(item => item.palavra.toUpperCase().startsWith(opcao.value.toUpperCase()) == true);
    }
    else if (opcao.value == categorias.pesquisar.nome) {
        titulo.innerHTML = categorias[opcao.value].titulo;
        txtPesquisa.style.display = 'inline-block';
        txtPesquisa.focus();
        
        if (txtPesquisa.value != "") {
            labelPesquisa.style.display = "inline-block";
            listaFiltrada = dicionario.filter(item => item.palavra.toUpperCase().startsWith(txtPesquisa.value.toUpperCase()) == true);
        }
        else {
            labelPesquisa.style.display = "none";
            listaFiltrada = dicionario.filter(item => item.categoria == categorias.alfabeto.nome);         
        }
         
        if (listaFiltrada.length == 0) {
            labelPesquisa.classList.add("label-pesquisa-nao-achou");
            labelPesquisa.classList.remove("label-pesquisa-achou");
            labelPesquisa.innerHTML = "Nenhuma correspondência encontrada";
        } else {
            labelPesquisa.classList.add("label-pesquisa-achou");
            labelPesquisa.classList.remove("label-pesquisa-nao-achou");
            labelPesquisa.innerHTML = listaFiltrada.length + " correspondência(s) encontrada(s)";
        }
    } 
    else {
        titulo.innerHTML = categorias[opcao.value].titulo;
        labelPesquisa.innerHTML = "";
        labelPesquisa.classList.remove("label-pesquisa-achou");
        labelPesquisa.classList.remove("label-pesquisa-nao-achou");
        txtPesquisa.style.display = 'none';
        txtPesquisa.value = "";
        listaFiltrada = dicionario.filter(item => item.categoria == categorias[opcao.value].nome);
    }
    
    posicaoLista = 0;    
    exibirSinal(0);
}

function exibirSinal(posicaoLista) {
    if (listaFiltrada.length > 0) {
        imagemSinal.src = listaFiltrada[posicaoLista].url;
        legenda.innerHTML = listaFiltrada[posicaoLista].palavra;
        if (listaFiltrada[posicaoLista].descricao != null)
            descricao.innerHTML = listaFiltrada[posicaoLista].descricao;
        else 
            descricao.innerHTML = "";
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
txtPesquisa.addEventListener('keyup', filtrar);