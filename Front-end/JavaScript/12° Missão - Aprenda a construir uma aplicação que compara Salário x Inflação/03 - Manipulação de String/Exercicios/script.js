var conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

var tamanho = conteudo.length;
var resumo = "";

if (tamanho > 100) {
    resumo = conteudo.substring(0, 97);
    resumo += "...";
} 
else {
    resumo = conteudo;
}
console.log(resumo);

// -----------------

var idiomas = "português,inglês,francês,espanhol";
var array_idiomas = idiomas.split(",");
for( const idioma of array_idiomas ){
console.log("Idioma: " + idioma);
}

// ------------------

var nomes = "Mateus Ana Lúcia Otávio";
console.log(nomes.substr(0, 6));
console.log(nomes.substr(11, 5));

// -----------------

var nome = "Jackeline";
var texto = nome + " é muito legal!";
var novo_texto = texto.replace("legal","simpática");
console.log(novo_texto);
console.log(novo_texto.length);

// -----------------

var paises_string = "Brasil Espanha Canadá Irlanda Suíça";
var paises_array = paises_string.split(" ");
console.log(paises_array);

// -------------------

var programador_1 = "FLÁVIA";
var programador_2 = "flávia";
var nome1 = programador_2.toUpperCase();
console.log(nome1)
if(programador_2.toUpperCase() == programador_1){
    console.log("iguais");
} else {
    console.log("diferentes");
}

// ---------------------

var produto = "  camisa  ";
console.log(produto.trim());

// -------------------

var frase = "Aprender JavaScript é gratificante! A linguagem JavaScript é bastante requisitada no mercado de trabalho";
var frase = frase.replace("JavaScript","JS");
console.log(frase);

// ------------

var frase = "Estou aprendendo JavaScript na DevMedia";
var resultado = frase.substr(17,10);
console.log(resultado);

//---------------

var nome = "Ricardo Rangel Menezes";
var array = nome.split(" ");
var  primeiro_nome = array[0];
var primeiro_nome_formatado = primeiro_nome.toUpperCase();
console.log(primeiro_nome_formatado);

// ---------------

var pais = "O Brasil é um país maravilhoso";
console.log(pais.toUpperCase());

// ----------------------

var cores = "verde azul branco amarelo preto";
var array_cores = cores.split(" ");
for ( const cor of  array_cores ){
    if( cor.length > 5 ){
        console.log(" A cor " +cor+ " tem mais que 5 caracteres" );
    } else {
        console.log(" A cor " +cor+ " não tem mais que 5 caracteres" );
    }
}

// --------------

var atores = "Will Smith;Brad Pitt;Adam Sandler;Tom Cruise";
var array_atores = atores.split(";");
for (let ator of array_atores){
    console.log(ator);
}