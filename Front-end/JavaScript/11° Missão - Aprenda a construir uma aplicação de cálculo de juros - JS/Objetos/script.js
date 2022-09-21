// Imprima false
console.log( 2000 <= 1000 && 5 <= 5 );
    
// Imprima true
console.log( true ||     false && false );

// Imprima false
console.log( 20 == '20' && false );

// Imprima true
console.log( false || true );

//-----------------------------------------------------------------

var curiosidades_pokemon = [
    { pokemon: "Kabuto",        curiosidade: "Pokémon regenerado a partir de um fóssil" },
    { pokemon: "Electabuzz",    curiosidade: "Possui seis dedos em cada mão" },
    { pokemon: "Ekans",         curiosidade: "Seu nome ao contrário significa cobra em inglês" },
    { pokemon: "Dragonite",     curiosidade: "Pode voar duas vezes a velocidade do som" },
    { pokemon: "Magikarp",      curiosidade: "Pula montanhas facilmente" },
    { pokemon: "Taillow",       curiosidade: "Voa mais de 180 milhas por dia" },
    { pokemon: "Muk",           curiosidade: "Uma gota desse pokémon pode poluir um lago inteiro" },
    { pokemon: "Slowbro",       curiosidade: "Único pokémon que pode voltar a evolução anterior" },
    { pokemon: "Zapdos",        curiosidade: "Tem maior vantagem de tipo entre os pássaros lendários" },
    { pokemon: "Spoink",        curiosidade: "Esse pokémon nunca para de pular" }
];

var tamanho_colecao = curiosidades_pokemon.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var pokemon_escolhido = curiosidades_pokemon[numero_sorteado];

var nome_pokemon = pokemon_escolhido.pokemon;
var curiosidade_pokemon = pokemon_escolhido.curiosidade;

console.log("CURIOSIDADE SOBRE O UNIVERSO POKÉMON");
console.log("Pokémon: " + nome_pokemon);
console.log("Curiosidade: " + curiosidade_pokemon);

//-----------------------------------------------------------------

var colecao_produtos = [
    { id: 1, nome: "Cooktop",           preco: 380 },
    { id: 2, nome: "Geladeira",         preco: 1350 },
    { id: 3, nome: "Notebook",          preco: 2500 },
    { id: 4, nome: "Liquidificador",    preco: 100 }
];
console.log(colecao_produtos.length)
console.log(colecao_produtos[3])

//-----------------------------------------------------------------

var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();
var dia_semana = data_atual.getDay();
// A série deve ser obtida aqui
var serie_do_dia = colecao_series_programacao[dia_semana];
var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);

//-----------------------------------------------------------------

console.log(1 + null);

console.log(null + false);

console.log(true + false );

//-----------------------------------------------------------------


var generos_musicais = [
    "samba",
    "funk",
    "rock",
    "pop",
    "hip hop"
];
generos_musicais[1] = "rap"
console.log(generos_musicais[4])
console.log(generos_musicais)

//-----------------------------------------------------------------

var notas_aluno =  [10, 6, 8, 5];
var total_notas = notas_aluno.length;
var soma_notas = notas_aluno[0] + notas_aluno[1] + notas_aluno[2]+ notas_aluno[3];
var media_aluno = soma_notas / total_notas;
console.log("Média do aluno: " + media_aluno);

//-----------------------------------------------------------------

var programador = {
    nome: "Lucas Simões",
    linguagem: "Java"
};

var nome = programador.nome;
var linguagem = programador.linguagem;
console.log( nome + " domina a linguagem " + linguagem );

//-----------------------------------------------------------------

var colecao_livros = [
    { id: 1, nome: "Dom Quixote",           numero_paginas: 863 },
    { id: 2, nome: "O Senhor dos Anéis",    numero_paginas: 1200 },
    { id: 3, nome: "As Crônicas de Nárnia", numero_paginas: 752 },
    { id: 4, nome: "O Caçador de Pipas",    numero_paginas: 371 },
    { id: 5, nome: "A Montanha Mágica",     numero_paginas: 848 }
];

var total_livros = colecao_livros.length;
var primeiro_livro = colecao_livros[0];
var ultimo_livro = colecao_livros[4];

console.log( "O total de livros é: " + total_livros );
console.log( "O nome do primeiro livro da coleção é: " + primeiro_livro.nome );
console.log( "O nome do último livro da coleção é: " + ultimo_livro.nome );

//-----------------------------------------------------------------

var colecao_animes = [
    { id: 1, titulo: "Naruto",      episodios: 673 },
    { id: 2, titulo: "Bleach",      episodios: 366 },
    { id: 3, titulo: "One Piece",   episodios: 931 }
];
var primeiro_anime = colecao_animes[0];
var id_anime = primeiro_anime.id;
var titulo_anime = primeiro_anime.titulo;
var total_episodios_anime = primeiro_anime.episodios;
console.log("Id do anime: " + id_anime);
console.log("Título do anime: " + titulo_anime);
console.log("Total de episódios do anime: " + total_episodios_anime);

//-----------------------------------------------------------------

var numero_1 = 10;
var numero_2 = 6;
var numero_3 = 4;
console.log( numero_1 % numero_2 == numero_3 );
console.log( ++numero_1 <= (numero_3 + numero_2));
console.log(numero_1++)

var numero_1 = 5;
var numero_2 = 3;
var numero_3 = 10;
var resultado = numero_3 * (numero_1 - numero_2);
console.log(resultado++);


var numero_1 = 4;
var numero_2 = 7;

numero_1++
;
numero_2--
;

console.log(numero_1);
console.log(numero_2)