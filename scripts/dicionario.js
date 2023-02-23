
const dicionario = [
    { palavra: "Zero", categoria: "numero", url: "imagens/numeros/0.jpg"},
    { palavra: "Um", categoria: "numero", url: "imagens/numeros/1.jpg"},
    { palavra: "Dois", categoria: "numero", url: "imagens/numeros/2.jpg"},
    { palavra: "Três", categoria: "numero", url: "imagens/numeros/3.jpg"},
    { palavra: "Quatro", categoria: "numero", url: "imagens/numeros/4.jpg"},
    { palavra: "Cinco", categoria: "numero", url: "imagens/numeros/5.jpg"},
    { palavra: "Seis", categoria: "numero", url: "imagens/numeros/6.jpg"},
    { palavra: "Sete", categoria: "numero", url: "imagens/numeros/7.jpg"},
    { palavra: "Oito", categoria: "numero", url: "imagens/numeros/8.jpg"},
    { palavra: "Nove", categoria: "numero", url: "imagens/numeros/9.jpg"},
    { palavra: "Dez", categoria: "numero", url: "imagens/numeros/10.jpg"},
    { palavra: "Onze", categoria: "numero", url: "imagens/numeros/11.jpg"},
    { palavra: "Mil", categoria: "numero", url: "imagens/numeros/12.jpg"},
    { palavra: "Dez mil", categoria: "numero", url: "imagens/numeros/13.jpg"},

    { palavra: "a", categoria: "alfabeto", url: "imagens/alfabeto/1.jpg"},
    { palavra: "b", categoria: "alfabeto", url: "imagens/alfabeto/2.jpg"},
    { palavra: "c", categoria: "alfabeto", url: "imagens/alfabeto/3.jpg"},
    { palavra: "ç", categoria: "alfabeto", url: "imagens/alfabeto/4.jpg"},
    { palavra: "d", categoria: "alfabeto", url: "imagens/alfabeto/5.jpg"},
    { palavra: "e", categoria: "alfabeto", url: "imagens/alfabeto/6.jpg"},
    { palavra: "f", categoria: "alfabeto", url: "imagens/alfabeto/7.jpg"},
    { palavra: "g", categoria: "alfabeto", url: "imagens/alfabeto/8.jpg"},
    { palavra: "h", categoria: "alfabeto", url: "imagens/alfabeto/9.jpg"},
    { palavra: "i", categoria: "alfabeto", url: "imagens/alfabeto/10.jpg"},
    { palavra: "j", categoria: "alfabeto", url: "imagens/alfabeto/11.jpg"},
    { palavra: "k", categoria: "alfabeto", url: "imagens/alfabeto/12.jpg"},
    { palavra: "l", categoria: "alfabeto", url: "imagens/alfabeto/13.jpg"},    
    { palavra: "m", categoria: "alfabeto", url: "imagens/alfabeto/14.jpg"},
    { palavra: "n", categoria: "alfabeto", url: "imagens/alfabeto/15.jpg"},
    { palavra: "o", categoria: "alfabeto", url: "imagens/alfabeto/16.jpg"},
    { palavra: "p", categoria: "alfabeto", url: "imagens/alfabeto/17.jpg"},
    { palavra: "q", categoria: "alfabeto", url: "imagens/alfabeto/18.jpg"},
    { palavra: "r", categoria: "alfabeto", url: "imagens/alfabeto/19.jpg"},
    { palavra: "s", categoria: "alfabeto", url: "imagens/alfabeto/20.jpg"},
    { palavra: "t", categoria: "alfabeto", url: "imagens/alfabeto/21.jpg"},
    { palavra: "u", categoria: "alfabeto", url: "imagens/alfabeto/22.jpg"},
    { palavra: "v", categoria: "alfabeto", url: "imagens/alfabeto/23.jpg"},
    { palavra: "w", categoria: "alfabeto", url: "imagens/alfabeto/24.jpg"},
    { palavra: "x", categoria: "alfabeto", url: "imagens/alfabeto/25.jpg"},
    { palavra: "y", categoria: "alfabeto", url: "imagens/alfabeto/26.jpg"},
    { palavra: "z", categoria: "alfabeto", url: "imagens/alfabeto/27.jpg"},

    { palavra: "a1", categoria: "", url: "imagens/palavras/a/1.jpg"},
    { palavra: "a2", categoria: "", url: "imagens/palavras/a/2.jpg"},
    { palavra: "a3", categoria: "", url: "imagens/palavras/a/3.jpg"},
    { palavra: "a4", categoria: "", url: "imagens/palavras/a/4.jpg"},
    { palavra: "a5", categoria: "", url: "imagens/palavras/a/5.jpg"},
    { palavra: "a6", categoria: "", url: "imagens/palavras/a/6.jpg"},
    { palavra: "a7", categoria: "", url: "imagens/palavras/a/7.jpg"},
    { palavra: "a8", categoria: "", url: "imagens/palavras/a/8.jpg"},
    { palavra: "a9", categoria: "", url: "imagens/palavras/a/9.jpg"},
    { palavra: "a10", categoria: "", url: "imagens/palavras/a/10.jpg"},
    { palavra: "a11", categoria: "", url: "imagens/palavras/a/11.jpg"},
    { palavra: "a12", categoria: "", url: "imagens/palavras/a/12.jpg"},
    { palavra: "a13", categoria: "", url: "imagens/palavras/a/13.jpg"},
    { palavra: "a14", categoria: "", url: "imagens/palavras/a/14.jpg"},
    { palavra: "a15", categoria: "", url: "imagens/palavras/a/15.jpg"},
    { palavra: "a16", categoria: "", url: "imagens/palavras/a/16.jpg"},
    { palavra: "a17", categoria: "", url: "imagens/palavras/a/17.jpg"},
    { palavra: "a18", categoria: "", url: "imagens/palavras/a/18.jpg"},
    { palavra: "a19", categoria: "", url: "imagens/palavras/a/19.jpg"},
    { palavra: "a20", categoria: "", url: "imagens/palavras/a/20.jpg"},
    { palavra: "a21", categoria: "", url: "imagens/palavras/a/21.jpg"},
    { palavra: "a22", categoria: "", url: "imagens/palavras/a/22.jpg"},
    { palavra: "a23", categoria: "", url: "imagens/palavras/a/23.jpg"},
    { palavra: "a24", categoria: "", url: "imagens/palavras/a/24.jpg"},
    { palavra: "a25", categoria: "", url: "imagens/palavras/a/25.jpg"},
    { palavra: "a26", categoria: "", url: "imagens/palavras/a/26.jpg"},
    { palavra: "a27", categoria: "", url: "imagens/palavras/a/27.jpg"},
    { palavra: "a28", categoria: "", url: "imagens/palavras/a/28.jpg"},
    { palavra: "a29", categoria: "", url: "imagens/palavras/a/29.jpg"},
    { palavra: "a30", categoria: "", url: "imagens/palavras/a/30.jpg"},
    { palavra: "a31", categoria: "", url: "imagens/palavras/a/31.jpg"},
    { palavra: "a32", categoria: "", url: "imagens/palavras/a/32.jpg"},
    { palavra: "a33", categoria: "", url: "imagens/palavras/a/33.jpg"},
    { palavra: "a34", categoria: "", url: "imagens/palavras/a/34.jpg"},
    { palavra: "a35", categoria: "", url: "imagens/palavras/a/35.jpg"},
    { palavra: "a36", categoria: "", url: "imagens/palavras/a/36.jpg"},
    { palavra: "a37", categoria: "", url: "imagens/palavras/a/37.jpg"},
    { palavra: "a38", categoria: "", url: "imagens/palavras/a/38.jpg"},
    { palavra: "a39", categoria: "", url: "imagens/palavras/a/39.jpg"},
    { palavra: "a40", categoria: "", url: "imagens/palavras/a/40.jpg"},
    { palavra: "a41", categoria: "", url: "imagens/palavras/a/41.jpg"},    
    { palavra: "a42", categoria: "", url: "imagens/palavras/a/42.jpg"},
    { palavra: "a43", categoria: "", url: "imagens/palavras/a/43.jpg"},
    { palavra: "a44", categoria: "", url: "imagens/palavras/a/44.jpg"},
    { palavra: "a45", categoria: "", url: "imagens/palavras/a/45.jpg"},
    { palavra: "a46", categoria: "", url: "imagens/palavras/a/46.jpg"},
    { palavra: "a47", categoria: "", url: "imagens/palavras/a/47.jpg"},
    { palavra: "a48", categoria: "", url: "imagens/palavras/a/48.jpg"},
    { palavra: "a49", categoria: "", url: "imagens/palavras/a/49.jpg"},
    { palavra: "a50", categoria: "", url: "imagens/palavras/a/50.jpg"},
    { palavra: "a51", categoria: "", url: "imagens/palavras/a/51.jpg"},
    { palavra: "a52", categoria: "", url: "imagens/palavras/a/52.jpg"},
    { palavra: "a53", categoria: "", url: "imagens/palavras/a/53.jpg"},
    { palavra: "a54", categoria: "", url: "imagens/palavras/a/54.jpg"},
    { palavra: "a55", categoria: "", url: "imagens/palavras/a/55.jpg"},
    { palavra: "a56", categoria: "", url: "imagens/palavras/a/56.jpg"},
    { palavra: "a57", categoria: "", url: "imagens/palavras/a/57.jpg"},
    { palavra: "a58", categoria: "", url: "imagens/palavras/a/58.jpg"},
    { palavra: "a59", categoria: "", url: "imagens/palavras/a/59.jpg"},
    { palavra: "a60", categoria: "", url: "imagens/palavras/a/60.jpg"},
    { palavra: "a61", categoria: "", url: "imagens/palavras/a/61.jpg"},
    { palavra: "a62", categoria: "", url: "imagens/palavras/a/62.jpg"},
    { palavra: "a63", categoria: "", url: "imagens/palavras/a/63.jpg"},
    { palavra: "a64", categoria: "", url: "imagens/palavras/a/64.jpg"},
    { palavra: "a65", categoria: "", url: "imagens/palavras/a/65.jpg"},
    { palavra: "a66", categoria: "", url: "imagens/palavras/a/66.jpg"},
    { palavra: "a67", categoria: "", url: "imagens/palavras/a/67.jpg"},
    { palavra: "a68", categoria: "", url: "imagens/palavras/a/68.jpg"},
    { palavra: "a69", categoria: "", url: "imagens/palavras/a/69.jpg"},
    { palavra: "a70", categoria: "", url: "imagens/palavras/a/70.jpg"},
    { palavra: "a71", categoria: "", url: "imagens/palavras/a/71.jpg"},
    { palavra: "a72", categoria: "", url: "imagens/palavras/a/72.jpg"},
    { palavra: "a73", categoria: "", url: "imagens/palavras/a/73.jpg"},
    { palavra: "a74", categoria: "", url: "imagens/palavras/a/74.jpg"},
    { palavra: "a75", categoria: "", url: "imagens/palavras/a/75.jpg"},
    { palavra: "a76", categoria: "", url: "imagens/palavras/a/76.jpg"},
    { palavra: "a77", categoria: "", url: "imagens/palavras/a/77.jpg"},
    { palavra: "a78", categoria: "", url: "imagens/palavras/a/78.jpg"},


];


















































