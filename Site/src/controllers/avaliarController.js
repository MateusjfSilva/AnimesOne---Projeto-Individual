var avaliarModel = require("../models/avaliarModel");

function allCards(req, res) {
    var id = req.params.idMomento;

    avaliarModel.allCards(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mostrarMedia(req, res) {
    var id = req.params.idMomento;

    avaliarModel.mostrarMedia(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os médias: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function publicar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var nota = req.body.notaServer;
    var titulo = req.body.tituloServer;
    var imagem = req.body.imagemServer;
    var video = req.body.urlVideoServer;
    var idUsuario = req.params.idUsuario;

    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Sua nota está undefined!");
    } else if (imagem == undefined) {
        res.status(400).send("Sua imagem está undefined!");
    }else if (video == undefined) {
        res.status(400).send("Seu video está undefined!");
    } else if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua idUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliarModel.publicar(id, titulo, imagem, video, nota, idUsuario)
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

function suaFrase(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var frase = req.body.fraseServer;
    var idUsuario = req.params.idUsuario;

    // Faça as validações dos valores
    if (frase == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua idUsuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        avaliarModel.suaFrase(frase, idUsuario)
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

function exibirFrase(req, res) {
    var idUsuario = req.params.idUsuario;

    avaliarModel.exibirFrase(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else if (resultado == undefined) {
            
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    publicar,
    mostrarMedia,
    allCards,
    suaFrase,
    exibirFrase
}