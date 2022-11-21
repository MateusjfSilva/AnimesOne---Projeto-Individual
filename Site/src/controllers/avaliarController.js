var avaliarModel = require("../models/avaliarModel");


function publicar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var nota = req.body.notaServer;
    var titulo = req.body.tituloServer;
    var idUsuario = req.params.idUsuario;

    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Sua nota está undefined!");
    } else if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua idUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliarModel.publicar(id, titulo, nota, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    publicar
}