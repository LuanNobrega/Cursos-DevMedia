// TEMPLATE STRING:

var linguagem = "JavaScript";
var stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}

// OBTENDO TAMANHO DE STRING:

var nome = "Isabela";
var frase = nome + " está aprendendo Javascript";

var tamanho_nome = nome.length;
var frase_nome = frase.length;

console.log(tamanho_nome); // 7
console.log(frase_nome); // 34

// -----------------

var cep = "23010-090";

if ( cep.length != 9 ){
    console.log("O CEP deve ter 9 caracteres");
}else{
    console.log(`O CEP é: ${cep}`)
}

// LETRAS MAIÚSCULAS E MINÚSCULAS:

var programador_1 = "Flávia";
var programador_2 = "Rogério";

console.log(programador_1.toUpperCase()); // FLÁVIA

console.log(programador_2.toLowerCase()); // rogério

// -----------

var programador_1 = "Flávia";
var programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}

// REMOVENDO ESPAÇOS EM BRANCO:

var nome = "   Diego     ";
var resultado = nome.trim();
console.log(resultado);

//----------------------

var telefone_1 = "(99) 99999-9999";
var telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1 == telefone_2 ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}
console.log(telefone_1); 
console.log(telefone_2);

// Usando o .trim() :
var telefone_1 = "(99) 99999-9999";
var telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1.trim() == telefone_2.trim() ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}
console.log(telefone_1);

// PREENCHENDO STRINGS:

var label_nome = "Nome:";
var valor_nome = "Jorge Luiz";

var label_profissao = "Profissão:";
var valor_profissao = "Professor";

var label_endereco = "Endereço:";
var valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome + valor_nome );
console.log( label_profissao + valor_profissao );
console.log( label_endereco + valor_endereco );

//---------------

var label_nome = "Nome:";
var valor_nome = "Jorge Luiz";

var label_profissao = "Profissão:";
var valor_profissao = "Professor";

var label_endereco = "Endereço:";
var valor_endereco = "Rua Cruzeiro do Sul";

console.log("\n", label_nome.padEnd(25, '.') + valor_nome );
console.log(label_profissao.padEnd(25, '.') + valor_profissao );
console.log(label_endereco.padEnd(25, '.') + valor_endereco );

// SUBSTITUINDO PARTES DE STRINGS:

var texto = "Gabriel adora JavaScript! Ele faz exercícios de JavaScript todos os dias para aprender mais.";
var resultado = texto.replace("JavaScript", "JS");
console.log("\n",resultado);

var texto = "O Rio de Janeiro é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!";
var resultado = texto.replace("Rio de Janeiro", "RJ");
console.log("\n",resultado);

// RETORNANDO PARTES DE STRINGS: 

var frase = "Estou aprendendo JavaScript na DevMedia";
var resultado = frase.substr(17, 10);
console.log("\n",resultado);

// ---------------

var frase = "Eu sou programador JavaScript";
var resultado = frase.substring(7, 18);
console.log(resultado);

// -----------------

var frase = "Ana é especialista em JavaScript";
var substring_1 = frase.substr(6, 12);
console.log(substring_1);

// ----------------

var conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";
var tamanho = conteudo.length;
var resumo = "";
if( tamanho > 100 ){
    resumo = conteudo.substr(0, 97);
    resumo += "...";
} else {
    resumo = conteudo;
}
console.log(resumo);

// PROCURANDO SUBSTRING DENTRO DE UMA STRING:

var frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
var posicao = frase.indexOf("sonho");
console.log(posicao);

// --------------------

var frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
var posicao = frase.indexOf("esperança");
console.log(posicao);

// ---------------

var expressao_proibida = "passaporte falso";
var comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else {
    console.log("Seu comentário foi aprovado");
}
console.log(comentario);

// Separando strings em partes:

var paises_string = "Brasil Espanha Canadá Irlanda Suíça";
var paises_array = paises_string.split(" ");
console.log(paises_array);

//-----------------

var cores_string = "vermelho,azul,branco,cinza,roxo";
var cores_array = cores_string.split(",");
console.log(cores_array);

//--------------

var nome_completo = "Ana Mendes da Silva";
var array = nome_completo.split(" ");
var nome = array[0];
console.log("Olá " + nome + ", seja bem vindo(a)");