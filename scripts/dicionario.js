
const dicionario = [
    { palavra: "Zero", tipo: "numero", url: "imagens/numeros/0.jpg"},
    { palavra: "Um", tipo: "numero", url: "imagens/numeros/1.jpg"},
    { palavra: "Dois", tipo: "numero", url: "imagens/numeros/2.jpg"},
    { palavra: "Três", tipo: "numero", url: "imagens/numeros/3.jpg"},
    { palavra: "Quatro", tipo: "numero", url: "imagens/numeros/4.jpg"},
    { palavra: "Cinco", tipo: "numero", url: "imagens/numeros/5.jpg"},
    { palavra: "Seis", tipo: "numero", url: "imagens/numeros/6.jpg"},
    { palavra: "Sete", tipo: "numero", url: "imagens/numeros/7.jpg"},
    { palavra: "Oito", tipo: "numero", url: "imagens/numeros/8.jpg"},
    { palavra: "Nove", tipo: "numero", url: "imagens/numeros/9.jpg"},
    { palavra: "Dez", tipo: "numero", url: "imagens/numeros/10.jpg"},
    { palavra: "Onze", tipo: "numero", url: "imagens/numeros/11.jpg"},
    { palavra: "Mil", tipo: "numero", url: "imagens/numeros/12.jpg"},
    { palavra: "Dez mil", tipo: "numero", url: "imagens/numeros/13.jpg"},

    { palavra: "A", tipo: "alfabeto", url: "imagens/alfabeto/1.jpg"},
    { palavra: "B", tipo: "alfabeto", url: "imagens/alfabeto/2.jpg"},
    { palavra: "C", tipo: "alfabeto", url: "imagens/alfabeto/3.jpg"},
    { palavra: "Ç", tipo: "alfabeto", url: "imagens/alfabeto/4.jpg"},
    { palavra: "D", tipo: "alfabeto", url: "imagens/alfabeto/5.jpg"},
    { palavra: "E", tipo: "alfabeto", url: "imagens/alfabeto/6.jpg"},
    { palavra: "F", tipo: "alfabeto", url: "imagens/alfabeto/7.jpg"},
    { palavra: "G", tipo: "alfabeto", url: "imagens/alfabeto/8.jpg"},
    { palavra: "H", tipo: "alfabeto", url: "imagens/alfabeto/9.jpg"},
    { palavra: "I", tipo: "alfabeto", url: "imagens/alfabeto/10.jpg"},
    { palavra: "J", tipo: "alfabeto", url: "imagens/alfabeto/11.jpg"},
    { palavra: "K", tipo: "alfabeto", url: "imagens/alfabeto/12.jpg"},
    { palavra: "L", tipo: "alfabeto", url: "imagens/alfabeto/13.jpg"},    
    { palavra: "M", tipo: "alfabeto", url: "imagens/alfabeto/14.jpg"},
    { palavra: "N", tipo: "alfabeto", url: "imagens/alfabeto/15.jpg"},
    { palavra: "O", tipo: "alfabeto", url: "imagens/alfabeto/16.jpg"},
    { palavra: "P", tipo: "alfabeto", url: "imagens/alfabeto/17.jpg"},
    { palavra: "Q", tipo: "alfabeto", url: "imagens/alfabeto/18.jpg"},
    { palavra: "R", tipo: "alfabeto", url: "imagens/alfabeto/19.jpg"},
    { palavra: "S", tipo: "alfabeto", url: "imagens/alfabeto/20.jpg"},
    { palavra: "T", tipo: "alfabeto", url: "imagens/alfabeto/21.jpg"},
    { palavra: "U", tipo: "alfabeto", url: "imagens/alfabeto/22.jpg"},
    { palavra: "V", tipo: "alfabeto", url: "imagens/alfabeto/23.jpg"},
    { palavra: "W", tipo: "alfabeto", url: "imagens/alfabeto/24.jpg"},
    { palavra: "X", tipo: "alfabeto", url: "imagens/alfabeto/25.jpg"},
    { palavra: "Y", tipo: "alfabeto", url: "imagens/alfabeto/26.jpg"},
    { palavra: "Z", tipo: "alfabeto", url: "imagens/alfabeto/27.jpg"},

    { palavra: "a1", tipo: "a", url: "imagens/palavras/a/1.jpg"},
    { palavra: "a2", tipo: "a", url: "imagens/palavras/a/2.jpg"},
    { palavra: "a3", tipo: "a", url: "imagens/palavras/a/3.jpg"},
    { palavra: "a4", tipo: "a", url: "imagens/palavras/a/4.jpg"},
    { palavra: "a5", tipo: "a", url: "imagens/palavras/a/5.jpg"},
    { palavra: "a6", tipo: "a", url: "imagens/palavras/a/6.jpg"},
    { palavra: "a7", tipo: "a", url: "imagens/palavras/a/7.jpg"},
    { palavra: "a8", tipo: "a", url: "imagens/palavras/a/8.jpg"},
    { palavra: "a9", tipo: "a", url: "imagens/palavras/a/9.jpg"},
    { palavra: "a10", tipo: "a", url: "imagens/palavras/a/10.jpg"},
    { palavra: "a11", tipo: "a", url: "imagens/palavras/a/11.jpg"},
    { palavra: "a12", tipo: "a", url: "imagens/palavras/a/12.jpg"},
    { palavra: "a13", tipo: "a", url: "imagens/palavras/a/13.jpg"},
    { palavra: "a14", tipo: "a", url: "imagens/palavras/a/14.jpg"},
    { palavra: "a15", tipo: "a", url: "imagens/palavras/a/15.jpg"},
    { palavra: "a16", tipo: "a", url: "imagens/palavras/a/16.jpg"},
    { palavra: "a17", tipo: "a", url: "imagens/palavras/a/17.jpg"},
    { palavra: "a18", tipo: "a", url: "imagens/palavras/a/18.jpg"},
    { palavra: "a19", tipo: "a", url: "imagens/palavras/a/19.jpg"},
    { palavra: "a20", tipo: "a", url: "imagens/palavras/a/20.jpg"},
    { palavra: "a21", tipo: "a", url: "imagens/palavras/a/21.jpg"},
    { palavra: "a22", tipo: "a", url: "imagens/palavras/a/22.jpg"},
    { palavra: "a23", tipo: "a", url: "imagens/palavras/a/23.jpg"},
    { palavra: "a24", tipo: "a", url: "imagens/palavras/a/24.jpg"},
    { palavra: "a25", tipo: "a", url: "imagens/palavras/a/25.jpg"},
    { palavra: "a26", tipo: "a", url: "imagens/palavras/a/26.jpg"},
    { palavra: "a27", tipo: "a", url: "imagens/palavras/a/27.jpg"},
    { palavra: "a28", tipo: "a", url: "imagens/palavras/a/28.jpg"},
    { palavra: "a29", tipo: "a", url: "imagens/palavras/a/29.jpg"},
    { palavra: "a30", tipo: "a", url: "imagens/palavras/a/30.jpg"},
    { palavra: "a31", tipo: "a", url: "imagens/palavras/a/31.jpg"},
    { palavra: "a32", tipo: "a", url: "imagens/palavras/a/32.jpg"},
    { palavra: "a33", tipo: "a", url: "imagens/palavras/a/33.jpg"},
    { palavra: "a34", tipo: "a", url: "imagens/palavras/a/34.jpg"},
    { palavra: "a35", tipo: "a", url: "imagens/palavras/a/35.jpg"},
    { palavra: "a36", tipo: "a", url: "imagens/palavras/a/36.jpg"},
    { palavra: "a37", tipo: "a", url: "imagens/palavras/a/37.jpg"},
    { palavra: "a38", tipo: "a", url: "imagens/palavras/a/38.jpg"},
    { palavra: "a39", tipo: "a", url: "imagens/palavras/a/39.jpg"},
    { palavra: "a40", tipo: "a", url: "imagens/palavras/a/40.jpg"},
    { palavra: "a41", tipo: "a", url: "imagens/palavras/a/41.jpg"},    
    { palavra: "a42", tipo: "a", url: "imagens/palavras/a/42.jpg"},
    { palavra: "a43", tipo: "a", url: "imagens/palavras/a/43.jpg"},
    { palavra: "a44", tipo: "a", url: "imagens/palavras/a/44.jpg"},
    { palavra: "a45", tipo: "a", url: "imagens/palavras/a/45.jpg"},
    { palavra: "a46", tipo: "a", url: "imagens/palavras/a/46.jpg"},
    { palavra: "a47", tipo: "a", url: "imagens/palavras/a/47.jpg"},
    { palavra: "a48", tipo: "a", url: "imagens/palavras/a/48.jpg"},
    { palavra: "a49", tipo: "a", url: "imagens/palavras/a/49.jpg"},
    { palavra: "a50", tipo: "a", url: "imagens/palavras/a/50.jpg"},
    { palavra: "a51", tipo: "a", url: "imagens/palavras/a/51.jpg"},
    { palavra: "a52", tipo: "a", url: "imagens/palavras/a/52.jpg"},
    { palavra: "a53", tipo: "a", url: "imagens/palavras/a/53.jpg"},
    { palavra: "a54", tipo: "a", url: "imagens/palavras/a/54.jpg"},
    { palavra: "a55", tipo: "a", url: "imagens/palavras/a/55.jpg"},
    { palavra: "a56", tipo: "a", url: "imagens/palavras/a/56.jpg"},
    { palavra: "a57", tipo: "a", url: "imagens/palavras/a/57.jpg"},
    { palavra: "a58", tipo: "a", url: "imagens/palavras/a/58.jpg"},
    { palavra: "a59", tipo: "a", url: "imagens/palavras/a/59.jpg"},
    { palavra: "a60", tipo: "a", url: "imagens/palavras/a/60.jpg"},
    { palavra: "a61", tipo: "a", url: "imagens/palavras/a/61.jpg"},
    { palavra: "a62", tipo: "a", url: "imagens/palavras/a/62.jpg"},
    { palavra: "a63", tipo: "a", url: "imagens/palavras/a/63.jpg"},
    { palavra: "a64", tipo: "a", url: "imagens/palavras/a/64.jpg"},
    { palavra: "a65", tipo: "a", url: "imagens/palavras/a/65.jpg"},
    { palavra: "a66", tipo: "a", url: "imagens/palavras/a/66.jpg"},
    { palavra: "a67", tipo: "a", url: "imagens/palavras/a/67.jpg"},
    { palavra: "a68", tipo: "a", url: "imagens/palavras/a/68.jpg"},
    { palavra: "a69", tipo: "a", url: "imagens/palavras/a/69.jpg"},
    { palavra: "a70", tipo: "a", url: "imagens/palavras/a/70.jpg"},
    { palavra: "a71", tipo: "a", url: "imagens/palavras/a/71.jpg"},
    { palavra: "a72", tipo: "a", url: "imagens/palavras/a/72.jpg"},
    { palavra: "a73", tipo: "a", url: "imagens/palavras/a/73.jpg"},
    { palavra: "a74", tipo: "a", url: "imagens/palavras/a/74.jpg"},
    { palavra: "a75", tipo: "a", url: "imagens/palavras/a/75.jpg"},
    { palavra: "a76", tipo: "a", url: "imagens/palavras/a/76.jpg"},
    { palavra: "a77", tipo: "a", url: "imagens/palavras/a/77.jpg"},
    { palavra: "a78", tipo: "a", url: "imagens/palavras/a/78.jpg"},
];


















































