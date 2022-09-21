var diaDaSemana = 0;

if (diaDaSemana == "0" || diaDaSemana == "6"){
    console.log("Não funcionamos durante os finais de semana")
}else{
    console.log("Estamos abertos")
}

var x = "";
var y = 0;

if(x === y) {
    console.log("X e Y são iguais");
}else {
    console.log("X e Y são diferentes");
}

var x = 10;
var y = "10";

if(x === y){
    console.log("X é igual a Y");
}else{
    console.log("X é diferente de Y");
}

//ERRO QUANDO SE USA APENAS == :
var resposta_usuario = "";

if(resposta_usuario == 0){
    console.log("resposta correta");
}else{
    console.log("resposta incorreta");
}

// AGORA DE MANEIRA CORRETA:
var resposta_usuario = "";

if(resposta_usuario === 0){
    console.log("resposta correta");
}else{
    console.log("resposta incorreta");
}

//if ternário:
var nota = 7;
if (nota >= 7 ) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}

var status = nota > 7 ? "Aprovado" : "Reprovado";
console.log(status)

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica a condição e define o resultado na variável 'status_loja'
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//Imprime o resultado no console
console.log(status_loja);

// SWITCH: 

var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

var mes = "Janeiro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}


// EXEMPLO: 

let meteoros_trimestre_um     =  "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoros_trimestre_dois   =  "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_tres   =  "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";

let meteoros_trimestre_quatro =  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";

let data_atual = new Date();
let mes_atual = data_atual.getMonth();

if(mes_atual == 0 || mes_atual == 1 || mes_atual == 2) {
    console.log("As chuvas de meteoros do primeiro trimestre são:\n\n"+meteoros_trimestre_um);
}
else if(mes_atual == 3 || mes_atual == 4 || mes_atual == 5) {
    console.log("As chuvas de meteoros do segundo trimestre são:\n\n"+meteoros_trimestre_dois);
}
else if(mes_atual == 6 || mes_atual == 7 || mes_atual == 8) {
    console.log("As chuvas de meteoros do terceiro trimestre são:\n\n"+meteoros_trimestre_tres);
}
else if(mes_atual == 9 || mes_atual == 10 || mes_atual == 11) {
    console.log("As chuvas de meteoros do quarto trimestre são:\n\n"+meteoros_trimestre_quatro);
}
else {
    console.log("Nenhuma chuva de meteoro no período informado");
}

var resultado = true;
var msg = "";

msg = resultado && "Classificado";
console.log(msg);

var resultado = false;
var msg = "";

msg = resultado && "Classificado";
console.log(msg);



//If de curto circuito: 

var aprovado = true;

if(aprovado){
    var resultado = aprovado && "Aprovado";
    console.log(resultado)
}


var produto = "Geladeira";
var retorno = "";

var retorno = (produto === "Geladeira") ? "desconto" : "normal";
console.log(retorno)