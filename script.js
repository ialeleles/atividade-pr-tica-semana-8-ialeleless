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
