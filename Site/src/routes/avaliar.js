var express = require("express");
var router = express.Router();

var avaliarController = require("../controllers/avaliarController");

router.get("/allCards/:idVar", function (req, res) {
    avaliarController.allCards(req, res);
});

router.get("/mostrarMedia/:idVar", function (req, res) {
    avaliarController.mostrarMedia(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avaliarController.publicar(req, res);
});

router.post("/suaFrase/:idUsuario", function (req, res) {
    avaliarController.suaFrase(req, res);
});

router.get("/exibirFrase/:idUsuario", function (req, res) {
    avaliarController.exibirFrase(req, res);
});

module.exports = router;