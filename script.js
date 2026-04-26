// Catálogo
const catalogo = [
    {
        id: 1,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["ação", "drama"],
        nota: 9.5,
        assistido: false 
    },
    {
        id: 2,
        titulo: "Os Vingadores",
        tipo: "filme",
        ano: 2012,
        generos: ["ação"],
        nota: 8,
        assistido: true 
    },
    {
        id: 3,
        titulo: "Devoradores de Estrelas",
        tipo: "filme",
        ano: 2026,
        generos: ["aventura", "ficção científica"],
        nota: 8.4,
        assistido: true 
    },
    {
        id: 4,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["drama", "ficção científica", "terror"],
        nota: 8.6,
        assistido: true 
    },
    {
        id: 5,
        titulo: "Game of Thrones",
        tipo: "serie",
        ano: 2011,
        generos: ["épico", "ação"],
        nota: 9.2,
        assistido: false
    },
    {
        id: 6,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["aventura", "ficção científica"],
        nota: 8.7,
        assistido: true 
    }
];

console.log(catalogo)

// Título do primeiro item
console.log(catalogo[0].titulo);

// Ano do último item
console.log(catalogo[catalogo.length -1].ano)

// O segundo gênero do terceiro item (quando existir)
if (catalogo[2].generos[1]) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("Esse item possui apenas um gênero.");
}

// Lista todos os títulos no console
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
// Transformação contendo apenas títulos em maiúsculo
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta)

// Novo array (naoAssistidos)
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(naoAssistidos.length);

// Busca com find
const resultado = catalogo.find(item => item.nota >= 9);

if(resultado) {
    console.log(resultado.titulo + " - " + resultado.nota);
} else {
    console.log("Nenhum item com a nota maior ou igual a 9");
};

// Agregação com reduce

// Média das notas do catálogo
const soma = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

const media = soma / catalogo.length;
console.log(media.toFixed(2));

// Média dos assistidos do catálogo 
const assistidos = catalogo.filter(item => item.assistido);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;
console.log(mediaAssistidos.toFixed(2));

// Verifica se existe algum item com lançamento antes dos anos 2000
const lancamentosAntesDe2000 = catalogo.some(item => item.ano < 2000);
console.log(lancamentosAntesDe2000) 

if (lancamentosAntesDe2000) {
    console.log("Existe item lançado antes de 2000.");
} else {
    console.log("Nenhum item foi lançado antes de 2000.");
}

// Verifica se todos os itens do catálogo possuem pelo menos um gênero
const quantidadeGeneros = catalogo.every(item => item.generos.length > 0)
console.log(quantidadeGeneros)

if (quantidadeGeneros) {
    console.log("Todos os itens possuem pelo menos um gênero.");
} else {
    console.log("Existe item sem gênero.");
}
