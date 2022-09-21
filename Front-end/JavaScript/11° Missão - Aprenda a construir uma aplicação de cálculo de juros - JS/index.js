//Declaração de Variáveis:

var soma = 0;
soma = 10 + 10;
console.log(soma); 

//Função Simples: 

function somadevalores(a, b){

  return(a + b)
}

console.log(somadevalores(10, 20));

//Declaração de variável e uma variável do tipo Objeto: 

var aluno = "Joaquim";
console.log(aluno);

var aluno2 = {
  nome: "Luan",
  idade: 30
}

console.log(aluno2);

//Variável do tipo Number:

var numero1 = 20.00;
console.log(numero1)

//Variável do tipo Array:

var numeros = [20, 30, 40];
console.log(numeros)

//Fazer uma soma usando função:

var n1 = 10;
var n2 = 12;

function somar(n1, n2){
  return(n1 + n2);
}
console.log(somar(n1, n2));

//Criar um Hello Word:

var texto = "Hello Word";

function imprimatexto(textoparaimprimir){
  console.log(textoparaimprimir);
}
imprimatexto(texto);

function somatorio(somas){
  console.log(somas);
}
somatorio(n1 + n2);

//Variáveis e dados:

var preco = 25;
var desconto = 5;
var precoFinal = preco - desconto;
console.log("O valor final após o desconto é ",+ precoFinal);

//Verificar tipo de variável:

var numero2 = 2;
console.log(typeof numero2);

var ligado = true;
console.log(typeof ligado);


//Array:

var estados = ["RJ", "PB", "SP", "PE"];
console.log(estados[2]);

function mostraMensagem(mensagem) {
  console.log(mensagem);
}

function quadrado(numero){
  console.log(numero * numero);
}

quadrado(2)

//=========================================
var nota_1 = 10;
var nota_2 = 8;
var nota_3 = 7;
var nota_4 = 5;

var media = (nota_1 + nota_2 + nota_3 + nota_4) / 4;
 
console.log("Média: " + media);

//=========================================
console.log( false || true && false );
console.log( false && true && !false );
console.log( 20 === "20" && !false );
console.log( 20 > 10 && 1 == '1' );

console.log( 20 >= 10 && 2 < 5 );
console.log( 20 + 10 * 2 );
console.log( null + "null" );

//=========================================
const valor1 = !(true || false);
const valor2 = !(true && false);
const valor3 = false && true && true && true;

console.log(valor1);
console.log(valor2);
console.log(valor3);

//=========================================
var idade = 18;
var atendeAClassificacaoEtaria = (idade >= 18);
console.log(atendeAClassificacaoEtaria);

//=========================================
var valor;
console.log(valor);

console.log(10 === "10");

//=========================================
const nn1 = 20 % 2 == 0;
const nn2 = nn1 + "0";
const n3 = 0 / 0;

console.log(nn2, n3);

//=========================================
//Área do triângulo:
var base  = 5;
var altura = 8;
var area_triangulo =  ( base * altura ) / 2;

console.log("O valor da área do triângulo é: " + area_triangulo);

//=========================================
var posicao_inicial =  5; // m
var posicao_final = 23; // m
var tempo = 6; // s
var deslocamento = posicao_final - posicao_inicial;
var velocidade_media = deslocamento / tempo ;

console.log("A velocidade média foi de " + velocidade_media + "m/s");

//=========================================

var material = null;

console.log(material === "null");

//=========================================
var graus_celsius =  15;
var graus_fahrenheit = (graus_celsius  * 9/5 ) + 32;
console.log(graus_celsius + "°C equivalem a " + graus_fahrenheit + "°F" );

//=========================================
var valor_1 = 10;
var valor_2 = "10";
console.log(valor_1 === valor_2)  ;

//=========================================
var preco = 10;
var desconto = 0.1;
var novo_preco = preco - ( ( preco / desconto ) / 100 );

console.log(novo_preco);

//=========================================
var contador1 = 0;

console.log( contador1++ );
console.log( --contador1 );
console.log( ++contador1 );
console.log( contador1-- );

//=========================================
var materia = null;
console.log(materia == null);

//=========================================
var preco = 10;
preco = preco + 20;
console.log(preco);

var preco = 20;
preco += 10;
console.log("O PREÇO", preco);

var valor = 20
;
var percentual
 = 10;

var resultado = ( valor * percentual ) / 100;

console.log( "Resultado: " + percentual + "% de " + valor + " é igual a: " 
,resultado
 );

 var numero_1 = 10;
var numero_2 = 8;

var soma = (numero_1 + numero_2)
;
var subtracao = (numero_1 - numero_2)
;

console.log("A soma entre os números é " 
, soma
);
console.log("A subtração entre os números é " 
, subtracao
);