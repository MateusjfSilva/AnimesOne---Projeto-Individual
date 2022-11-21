var database = require("../database/config");

function publicar(id, titulo, nota, idUsuario) {
    
    var instrucao = `
        INSERT INTO momento (id, titulo, nota, fkUsuario) VALUES (${id}, '${titulo}', ${nota}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar
}