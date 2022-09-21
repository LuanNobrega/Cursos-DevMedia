var cursos_idiomas = [
        { nome: "Inglês", preco: 2500, carga_horaria: 160 },
        { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
        { nome: "Francês", preco: 3600, carga_horaria: 200 },
        { nome: "Chinês", preco: 5500, carga_horaria: 400 },
        { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

var contador = 0;
var valor_carga_horaria = 0;

while (contador < cursos_idiomas.length){

    var nome_curso = cursos_idiomas[contador].nome;
    var preco_curso = cursos_idiomas[contador].preco;
    var carga_curso = cursos_idiomas[contador].carga_horaria;
        
    console.log("Nome do Curso: " + nome_curso);
    console.log("Preço do Curso: " + preco_curso);
    console.log("Carga horária do Curso: " + carga_curso);
    
    valor_carga_horaria = preco_curso / carga_curso;
    
    if(valor_carga_horaria >= 15){
        console.log("Hora/Aula superior ou igual a R$ 15,00.");
    }else{
        console.log("Hora/Aula inferior a R$ 15,00.");
    }
    contador ++;

    console.log("\n")
}

//OUTRA MANEIRA DE FAZER: 

var cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for ( let curso of cursos_idiomas ) {

    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga_horaria_curso = curso.carga_horaria;

    let preco_hora_curso = preco_curso / carga_horaria_curso;

    console.log("Nome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
    console.log("Preço do curso: R$" + preco_curso + ",00");

    if ( preco_hora_curso >= 15) {
        console.log("Hora/aula superior ou igual a R$15,00");
    } else {
        console.log("Hora/aula inferior a R$15,00");
    }

    console.log("\n");
}




