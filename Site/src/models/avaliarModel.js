var database = require("../database/config");

function allCards() {
    console.log("ACESSEI O AVALIAR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function allCards()");
    for (var index = 0; index < 11; index++) {
        
        var instrucao = `
        select id, truncate(avg(nota), 1) as 'notaMedia' from momento group by id;
        `;

    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function mostrarMedia() {
    console.log("ACESSEI O AVALIAR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrarMedia()");
    for (var index = 0; index < 11; index++) {
        
        var instrucao = `
        select id, titulo, imagem, urlVideo, truncate(avg(nota), 1) as 'notaMedia' from momento group by id order by notaMedia desc limit 5;
        `;

    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(id, titulo, imagem, video, nota, idUsuario) {
    
    var instrucao = `
        INSERT INTO momento (id, titulo, imagem, urlVideo, nota, fkUsuario) VALUES (${id}, '${titulo}', '${imagem}', '${video}', ${nota}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function suaFrase(frase, idUsuario) {
    
    var instrucao = `
        INSERT INTO frase (id, fraseUsuario, fkUsuario) VALUES (${idUsuario}, '${frase}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirFrase(idUsuario) {
    console.log("ACESSEI O AVALIAR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirFrase()");
 
        var instrucao = `
        select fraseUsuario from frase where id = ${idUsuario};
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    publicar,
    mostrarMedia,
    allCards,
    suaFrase,
    exibirFrase
}