var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVALIAR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisar()");
    var instrucao = `
        SELECT avg(nota) as notaMed FROM lembrancas WHERE id = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(id, titulo, nota, idUsuario) {
    
    var instrucao = `
        INSERT INTO momento (id, titulo, nota, fkUsuario) VALUES (${id}, '${titulo}', ${nota}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    publicar,
    listar
}