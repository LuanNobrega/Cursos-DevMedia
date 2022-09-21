var disciplinas = [
    { id: 1, nome: "português", carga_horaria: 250 },
    { id: 2, nome: "matemática", carga_horaria: 220 },
    { id: 3, nome: "história", carga_horaria: 150 },
    { id: 4, nome: "geografia", carga_horaria: 150 },
    { id: 5, nome: "inglês", carga_horaria: 70 }
];


for (let disciplina of disciplinas) 
 {

    let id_disciplina = disciplina.id;
    let nome_disciplina = disciplina.nome;
    let carga_horaria_disciplina = disciplina.carga_horaria;

    console.log("Id da disciplina: " 
+ id_disciplina
 );
    console.log("Nome da disciplina: " 
+ nome_disciplina
 );
    console.log("Carga horária da disciplina: " 
+ carga_horaria_disciplina
 );

    console.log("\n");

}

// ---------------------------------

var alunos = ["Carlos", "Pablo", "Juliana", "Ingrid"];
var total_alunos = alunos.length;

for(let contador = 0; contador < total_alunos; contador ++){
    
    console.log(alunos[contador]);
}

// -------------------------

var chuvas_de_meteoros = [
    { nome: 'Alfa Centaurídeos',            declinacao: -59,  intensidade: 'Média'},
    { nome: 'Gama Normídeos',               declinacao: -50,  intensidade: 'Média'},
    { nome: 'Pi Pupídeos',                  declinacao: -45,  intensidade: 'Irregular'},
    { nome: 'Líridas',                      declinacao:  34,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',                declinacao:  -1,  intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',                  declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',           declinacao:  48,  intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          declinacao: -10,  intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       declinacao: -16,  intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',          declinacao: -30,  intensidade: 'Média'},
    { nome: 'Perseidas',                    declinacao:  58,  intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               declinacao:  59,  intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',              declinacao:  39,  intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        declinacao:  40,  intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              declinacao:   9,  intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             declinacao:  44,  intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    declinacao:  16,  intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   declinacao:  54,  intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           declinacao:  27,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               declinacao:  37,  intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            declinacao:  22,  intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     declinacao:  22,  intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          declinacao:   1,  intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               declinacao:   8,  intensidade: 'Fraca'},
    { nome: 'Fenícidas',                    declinacao: -53,  intensidade: 'Irregular'},
    { nome: 'Quadrântidas',                 declinacao:  49,  intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',              declinacao: -45,  intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              declinacao:   2,  intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   declinacao:  30,  intensidade: 'Média'},
    { nome: 'Gemínidas',                    declinacao:  33,  intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            declinacao:  18,  intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      declinacao:  76,  intensidade: 'Média'},
];


for ( let chuva in chuvas_de_meteoros) {

    console.log(chuvas_de_meteoros[chuva].nome);

    console.log(chuvas_de_meteoros[chuva].declinacao);

    console.log("\n");

}

// -------------------------------------------

var categorias = [
    {id: 1, nome: "Ficção científica"},
    {id: 2, nome: "Aventura"},
    {id: 3, nome: "Comédia"},
    {id: 4, nome: "Terror"},
    {id: 5, nome: "Drama"}
];


for (let categoria of categorias){

    console.log(categoria.id);
    console.log(categoria.nome);

    console.log("\n");
}
// -------------------------------

var contador = 10;

do{
    console.log(contador);
    contador --;

} while (contador > 0);

// -----------------------
var aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for (let dados in aluno){
   console.log(aluno[dados]);
}

// -------------------------

var funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

var contador = 0;
var encontrouHabilitado = false
;

while ( contador < funcionarios.length){
    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// -----------------------

let cursos_idiomas =
 [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for ( let curso of cursos_idiomas){

    
let nome_curso
 = curso.nome;
    
let preco_curso
 = curso.preco;
    
let carga_horaria_curso
 = curso.carga_horaria;

    let preco_hora_curso = 
preco_curso / carga_horaria_curso
 ;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: R$" + preco_curso + ",00");

    
if (preco_hora_curso >= 15)
 {
        console.log("Hora/aula superior ou igual a R$15,00");
    } else {
        console.log("Hora/aula inferior a R$15,00");
    }

    console.log("\n");
}

// ---------------

var valor_mensalidade = 100;
var taxa_multa = 0.02; // 2%
var total_dias = 10;
var contador = 1;

do {
    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

    contador++;

} while( contador < total_dias );

// --------------------

var produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

var desconto = 5;

for (let contador = 0; contador < produtos.length; contador ++) {

    let produto = produtos[contador];

    
        for (let propriedade in produto){

            if ( propriedade == "preco" ) {

                let preco = propriedade;

                let novo_preco = produto[preco] - desconto;

                console.log("preço atualizado: R$" + novo_preco + ",00");

            } else {

                console.log(propriedade + ": " + produto[propriedade]);
            }

        }

    console.log("\n");
}

// ------------------------------

var contatos = [
    {id: 1, nome: "Daiana"},
    {id: 2, nome: "Raquel"},
    {id: 3, nome: "Diogo"},
    {id: 4, nome: "Sandro"},
    {id: 5, nome: "Carolina"}
];

for (let contato of contatos){


    console.log(contato.id);
    console.log(contato.nome);

    console.log("\n");
}

// ------------------

var aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };
for ( let dados in aluno ) {
    console.log(aluno[dados]);
}

// ---------------------------

var produtos_array =  [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

var percentual_desconto = 10;

for ( let produto of  produtos_array ) {

    let nome = produto.nome;
    let preco = produto.preco;

    let valor_desconto = (preco * percentual_desconto  ) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

}

